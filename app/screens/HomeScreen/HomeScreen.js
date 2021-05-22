/**
 * Home Screen
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    FlatList,
    BackHandler,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import styles from './HomeScreenStyle';
import scale, { verticalScale } from '../../utils/Scale';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import DeviceInfo from 'react-native-device-info';
import * as homeScreenActions from '../../redux/actions/homeScreenActions';
import { connect } from 'react-redux';


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todaysDealsList: [],
        }
    }

    componentDidMount() {
        this.setNavigationHeaderConfiguration();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        this._unsubscribe = this.props.navigation.addListener('focus', async () => {
            console.log("Reducer Today Deal========", this.props.todayDeal)
            this.getHomeData();
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    getHomeData = async () => {
        let todayDealData = this.props.todayDeal;
        if (todayDealData.length !== 0) {
            this.setState({ todaysDealsList: todayDealData })
        } else {
            let data = {
                device_uuid: DeviceInfo.getUniqueId(),
                lat: '',
                long: '',
            }
            this.props.getHomeScreenData(data, (res) => this.getHomeScreenDataSuccessCallBack(res), (error) => this.getHomeScreenDataFailureCallBack(error));
        }
    }

    getHomeScreenDataSuccessCallBack = (res) => {
        console.log('@@@ Get Home Screen Data Success CallBack =============', res);
        let homeScreenData = res.data;
        this.setState({
            todaysDealsList: homeScreenData.todayDeals,
        });
    }

    getHomeScreenDataFailureCallBack = (error) => {
        console.log('@@@ Get Home Screen Data Failure CallBack ===================');
        if (error) {
            setTimeout(() => {
                this.props.showErrorModal(error);
            }, 0);
        } else {
            setTimeout(() => {
                this.props.showErrorModal('Network Error!');
            }, 0);
        }
    }

    setNavigationHeaderConfiguration = () => {
        this.props.navigation.setOptions({
            headerStyle: { backgroundColor: COLOR_CONST.greenTheme, shadowColor: 'transparent', elevation: 0, borderBottomLeftRadius: scale(10), borderBottomRightRadius: scale(10) },
            headerTitle: () => (<View><Text style={styles.headerTitleStyle}></Text></View>),
            headerLeft: () => (<TouchableOpacity onPress={() => this.props.navigation.openDrawer()}><Image source={IMG_CONST.MENU_ICON} style={styles.menuIcon} /></TouchableOpacity>),
        })
    }

    renderDealCell = (item, index) => {
        const isOutofStock = item.availability_status === 'NOTIFY';
        const isBanner = item.offer_type === 'ITEM' || item.offer_type === 'ORDER';
        const isCartHasItem = item.item_quantity;
        const isDiscount = (item.discount_value || item.discount_value > 0)
        if (isBanner) {
            return (
                <View animation="bounceIn" delay={1000} source={IMG_CONST.SPLASH_LOGO_WHITE} resizeMode="stretch">
                    <TouchableOpacity onPress={() => this.onPressBanners(item)} style={styles.dealBannerImage}>
                        <Image source={{ uri: item.banner_image_url }} style={styles.dealImageBanner} />
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <View animation="bounceIn" delay={1000}>
                <TouchableOpacity onPress={() => { this.resetFinalQuantity(); this.props.navigation.navigate('ProductDetail', { productData: item }) }} style={styles.dealCell}>
                    <View style={styles.dealImageContainer}>
                        <Image source={{ uri: item.thumbnail }} style={[styles.dealImage, { opacity: isOutofStock ? 0.5 : 1 }]} />
                        {isOutofStock && <Text style={styles.outOfStock}>out of stock</Text>}
                    </View>
                    <Text numberOfLines={1} style={styles.dealProductName}>{item.name}</Text>
                    <View style={styles.weightRow}>
                        <Text style={styles.hindiText}>{item.secondary_name}</Text>
                        {item.unit_id && <Text style={styles.weight}>{item.unit_id.base_quantity} {item.unit_id.name}</Text>}
                    </View>
                    <View style={styles.priceRow}>
                        {isDiscount && <Text style={styles.actualPrice}>Rs. {item.item_price}/-</Text>}
                        <Text style={styles.price}>Rs. {isDiscount ? item.discounted_price : item.item_price}/-</Text>
                        {isCartHasItem && <View style={styles.countRow}>
                            <TouchableOpacity onPress={() => this.updateCartValues(item, false)} style={styles.countButton}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.countText}>{item._id === this.finalItemID ? this.finalUpdatedQuantity : item.item_quantity}</Text>
                            <TouchableOpacity onPress={() => this.updateCartValues(item, true)} style={styles.countButton}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>}
                        {!isCartHasItem && !isOutofStock &&
                            <TouchableOpacity onPress={() => this.updateCartValues(item, true, 0)} style={styles.cartButton}>
                                <Image source={IMG_CONST.SHOPPING_CART} style={styles.shopIcon} />
                            </TouchableOpacity>}
                        {!isCartHasItem && isOutofStock && !item.is_notify && <TouchableOpacity onPress={() => this.notifyMeAboutProduct(item)} style={styles.outOfStockButton}>
                            <Text style={styles.notifyMe}>NOTIFY ME</Text>
                        </TouchableOpacity>}
                    </View>
                    {isDiscount && item.discount_type !== 'FLAT' && <View style={styles.discountLabel}>
                        <Text style={styles.discountPercent}>{item.discount_value}%</Text>
                    </View>}
                </TouchableOpacity>
            </View>
        )
    }

    renderTodaysDeals = () => {
        return (
            <View style={styles.dealsContainer}>
                <Text style={styles.todaysText}>Today's Deal</Text>
                <View style={styles.dealsList}>
                    <FlatList
                        numColumns={2}
                        extraData={this.state}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.todaysDealsList}
                        renderItem={({ item, index }) => this.renderDealCell(item, index)}
                    />
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor={COLOR_CONST.greenTheme} isFocused={true} />
                <ScrollView>
                    {this.renderTodaysDeals()}
                </ScrollView>
            </View>
        );
    }
};

const mapStateToProps = state => {
    return {
        todayDeal: state.home.todayDeal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHomeScreenData: (data, successCallBack, failureCallBack) => dispatch(homeScreenActions.getHomeScreenData(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

