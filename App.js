/**
 * NamoIndia React Native App
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, ImageBackground, StatusBar, Platform, Text, Linking } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import RootStackScreen from './app/screens/RootStackNavigator/RootStackScreen';
import { Provider } from 'react-redux';
import configureStore from './app/redux/config/store/index';
import ApplicationLoader from './app/components/AppLoader/AppLoader';
import CustomErrorModal from './app/components/CustomErrorModal/CustomErrorModal';
import CommonLoginModal from './app/components/CommonLoginModal/CommonLoginModal';
import { navigationRef, isReadyRef } from './app/screens/RootStackNavigator/RootNavigation';
import * as RootNavigation from './app/screens/RootStackNavigator/RootNavigation';
import AsyncStorage from '@react-native-community/async-storage';
import networkHOC from './app/utils/NetInfoHoc';
import NoNetwork from './app/components/NoNetworkScreen';
import messaging from '@react-native-firebase/messaging';
import { fcmService } from './app/services/notifications/FCMService';
import { localNotificationService } from './app/services/notifications/LocalNotificationService';
export let appObj = {};

class App extends Component {

  constructor(props) {
    super(props);
    appObj = this;
    this.state = {
      isDeepLinkUtilised: false,
      store: configureStore(() => {
      }).store
    };
    console.disableYellowBox = true;
  }

  componentDidMount()  {
    this.setToken();
    this.setDeepLink();
    this.setupNotification();
  }

  setDeepLink = () => {
    isReadyRef.current = false
      Linking.getInitialURL().then(url => {
        console.log('@@@ DEEPLINK ==================INITIAL', url);
        if(url) {
            this.deepLinkNavigate(url);
        }
      });
      Linking.addEventListener('url', this.handleOpenURL);
  }

  setupNotification = async() => {
    let accessToken = await AsyncStorage.getItem('USER_TOKEN');
    if(!accessToken) {
      try {
        fcmService.register(
          (token) => this.onRegister(token), 
          (notify) => this.onNotification(notify), 
          (notify) => this.onOpenNotification(notify));
        localNotificationService.configure((notify) => this.onOpenNotification(notify));
      } catch (error) {
        console.log('@@@ FCM Error ==========', error);
      }
    }
  }

  onRegister = async(token) => {
    console.log('@@@ FCM Registeration Token ==========', token);
    let fcmToken = await AsyncStorage.getItem('USER_FCM_TOKEN');
    let accessToken = await AsyncStorage.getItem('USER_TOKEN');
    let data  = {
      access_token: accessToken,
      device_token: fcmToken
    };
    // this.props.sendDeviceToken(data, (res) => this.sendDeviceTokenSuccessCallBack(res), (error) => this.sendDeviceTokenFailureCallBack(error));
  }

  onNotification = (notify) => {
    console.log('@@@ FCM Show Notification onNotification ==========1111', notify);
    let uniquedNotifId = Math.floor((Math.random() * 1000) + 1);
    const options = {
      soundName: 'default',
      playSound: true,
    };
    localNotificationService.showNotification(uniquedNotifId, notify.title, notify.message, notify, options);
  }

  onOpenNotification = (notify) => {
    
  }
    
  componentWillUnmount() { // C
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => { // D
    this.setState({ isDeepLinkUtilised: false }, () => {
      console.log('@@@ DEEPLINK ==================OPEN URL', event.url);
      // this.deepLinkNavigate(event.url);
    })
  }

  deepLinkNavigate = async(url) => {
    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];
    let userToken = await AsyncStorage.getItem('USER_TOKEN');
    if(!userToken)
      RootNavigation.navigate.replace('AuthNavigator');
    else {
      if (routeName === 'product')
        RootNavigation.navigate.replace('MainNavigator');
    }
  }

  setToken = (onRegister) => {
    messaging().getToken()
    .then(async fcmToken => {
        if(fcmToken) {
            console.log('@@@ FCM TOKEN ===========', fcmToken);
            await AsyncStorage.setItem('USER_FCM_TOKEN', fcmToken);
        } else {
            console.log('@@@ FCM SERVICE USER DOES NOT HAVE DEVICE TOKEN ===========');
        }
    }).catch(error => {
        console.log('@@@ FCM SERVICE GET TOKEN ERROR ===========', error);
    })
  }

  render() {
    const { isConnected } = this.props;
    return isConnected ? (
      <Provider store={this.state.store}>
        <StatusBar barStyle="dark-content" backgroundColor={'#004491'} />
        <NavigationContainer ref={navigationRef} onReady={() => { isReadyRef.current = true; }}>
          <ApplicationLoader />
          <CustomErrorModal />
          <RootStackScreen />
        </NavigationContainer>
      </Provider>
    ) : <NoNetwork />;
  }
}

export default networkHOC()(App);
