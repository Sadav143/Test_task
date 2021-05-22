/**
 * Profile Screen
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import styles from './ProfileScreenStyle';
import scale, { verticalScale } from '../../utils/Scale';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.setNavigationHeaderConfiguration();
    }

    setNavigationHeaderConfiguration = () => {
        this.props.navigation.setOptions({
            headerStyle: { backgroundColor: COLOR_CONST.greenTheme, shadowColor: 'transparent', elevation: 0, borderBottomLeftRadius: scale(10), borderBottomRightRadius: scale(10) },
            headerTitle: () => (<View><Text style={styles.headerTitleStyle}></Text></View>),
            headerLeft: () => (<TouchableOpacity style={styles.leftContainer} onPress={() => { Keyboard.dismiss(); this.props.navigation.openDrawer() }}><Image source={IMG_CONST.MENU_ICON} style={styles.menuIcon} /><Text style={styles.headerTitleStyle}>Profile</Text></TouchableOpacity>)
        })
    }

    renderEditAddressModal = () => {
        return (
            <View style={styles.itemsView}>
                <View style={styles.itemsRow}>
                    <Text style={styles.itemsText}>Profile Screen</Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor={COLOR_CONST.greenTheme} isFocused={true} />
                <KeyboardAwareScrollView>
                    {this.renderEditAddressModal()}
                </KeyboardAwareScrollView>
            </View>
        );
    }
};

export default ProfileScreen;
