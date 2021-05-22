/**
 * Cart Screen
 */
import React , { Component } from 'react';
import { 
    View, 
    Image,
    Text,
    BackHandler,
    TouchableOpacity
} from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import styles from './CartStyle';
import scale , {verticalScale} from '../../utils/Scale';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

class Cart extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
    
    componentDidMount() {
       this.setNavigationHeaderConfiguration();
       BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
       this._unsubscribe = this.props.navigation.addListener('focus', async () => {

        });
    }

    componentWillUnmount() {
        this._unsubscribe();
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    setNavigationHeaderConfiguration = () => {
        this.props.navigation.setOptions({
            headerStyle: { backgroundColor: COLOR_CONST.greenTheme, shadowColor: 'transparent', elevation: 0, borderBottomLeftRadius: scale(10), borderBottomRightRadius: scale(10) },
            headerTitle: () => (<View><Text style={styles.headerTitleStyle}></Text></View>),
            headerLeft: () => (<TouchableOpacity style={styles.leftContainer} onPress={() => this.props.navigation.openDrawer()}><Image source={IMG_CONST.MENU_ICON} style={styles.menuIcon} /><Text style={styles.headerTitleStyle}></Text></TouchableOpacity>),
        })
    }

    renderItemsView = () => {
        return (
            <View style={styles.itemsView}>
                <View style={styles.itemsRow}>
                    <Text style={styles.itemsText}>Home Screen</Text>
                </View>
            </View>
        )
    }
  
    render() {
        return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor={COLOR_CONST.greenTheme} isFocused={true} />
            {this.renderItemsView()}
        </View>
        );
    }
};

export default Cart;
