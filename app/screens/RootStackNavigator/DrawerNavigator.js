import React from 'react';
import { BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerContent from '../Drawer/DrawerContent';
import styles from './DrawerNavigatorStyle';
import HomeScreen from '../HomeScreen/HomeScreen';
import CartScreen from '../CartScreen/Cart';
import MyOrders from '../MyOrders/MyOrders';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import Scale from '../../utils/Scale';

const Drawer = createDrawerNavigator();

const DrawerStackScreen = (drawerProps) => {
    const showDrawer = false;
    return (
        <Drawer.Navigator
            drawerStyle={[styles.drawer, { width: !showDrawer ? null : Scale(300) }]}
            overlayColor="rgba(0, 0, 0, 0.2)"
            drawerContent={props => <DrawerContent {...props} />}
        >
            <RootStack.Screen name="MainStackScreen" component={MainStackScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};


const RootStack = createStackNavigator();

const handleBackButton = () => {
    BackHandler.exitApp();
    return true;
}

const MainStackScreen = (props) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="CartScreen"
                component={CartScreen}
                options={({ route, navigation }) => ({
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
            />
            <RootStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({ route, navigation }) => ({
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                listeners={{
                    focus: () => BackHandler.addEventListener('hardwareBackPress', handleBackButton)
                    , blur: () => BackHandler.removeEventListener('hardwareBackPress', handleBackButton)
                }}
            />
            <RootStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={({ route, navigation }) => ({
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
            />
            <RootStack.Screen
                name="MyOrders"
                component={MyOrders}
                options={({ route, navigation }) => ({
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
            />
        </RootStack.Navigator>
    );
};


export default DrawerStackScreen;