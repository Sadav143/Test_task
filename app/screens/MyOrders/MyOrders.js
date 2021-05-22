/**
 * My Orders Screen
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    BackHandler,
    TouchableOpacity,
} from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import styles from './MyOrdersStyle';
import scale, { verticalScale } from '../../utils/Scale';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

class MyOrders extends Component {

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
            headerLeft: () => (<TouchableOpacity style={styles.leftContainer} onPress={() => this.props.navigation.openDrawer()}><Image source={IMG_CONST.MENU_ICON} style={styles.menuIcon} /><Text style={styles.headerTitleStyle}>My Orders</Text></TouchableOpacity>)
        })
    }

    renderTitleSection = () => {
        return (
            <View style={styles.itemsView}>
                <View style={styles.itemsRow}>
                    <Text style={styles.itemsText}>My Order</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor={COLOR_CONST.greenTheme} isFocused={true} />
                {this.renderTitleSection()}
            </View>
        );
    }
};

export default MyOrders;

