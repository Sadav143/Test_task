import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import { FONTS } from '../../../app/theme/ColorConstants';
import * as CONST from '../../theme/StringConstants';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLOR_CONST.white
    },

    headerTitleStyle: {
        fontSize: scale(15),
        fontFamily: FONTS.GTWalsheimProMedium,
        color: COLOR_CONST.charcoalGrey,
        lineHeight: scale(18),
    },

    backButton: {
        paddingVertical: verticalScale(20),
        paddingRight: scale(20),
    },

    menuIcon: {
        width: scale(20.5),
        height: scale(14.3),
        marginLeft: scale(21),
    },

    rightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: scale(23.5),
    },

notifIcon: {
        marginRight: scale(17.5),
    },

    shopIcon: {
        width: scale(16),
        height: scale(16),
    },

    shopIcon1: {
        width: scale(21),
        height: scale(21),
    },

    redDot: {
        width: scale(10),
        height: scale(10),
        borderRadius: scale(5),
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
        left: scale(18),
        bottom: scale(15),
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: scale(332),
        height: scale(45),
        borderRadius: scale(27),
        backgroundColor: COLOR_CONST.white,
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 1,
        elevation: 1,
        alignSelf: 'center',
        marginTop: verticalScale(15),
    },

    searchIcon: {
        width: scale(17.48),
        height: scale(18.37),
        marginRight: scale(13.63),
    },

    searchText: {
        fontSize: scale(24),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyColor,
        marginLeft: scale(15),
    },

    bannerAdsContainer: {
        marginTop: verticalScale(15),
        marginHorizontal: scale(21.5),
        height: scale(170),
    },

    mediaContainer: {
        marginHorizontal: scale(21.5),
    },

    pagination: {
        position: 'absolute',
        bottom: verticalScale(7),
        left: 0,
        right: 0,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    inActiveDot: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_CONST.inActiveDotLightGrey,
        width: scale(4), 
        height: scale(4),
        borderRadius: scale(2), 
        marginHorizontal: scale(2.5),
    },

    activeDot: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_CONST.darkTitle,
        width: scale(4), 
        height: scale(4),
        borderRadius: scale(2), 
        marginHorizontal: scale(2.5),
    },

    bannerAdsCell: {
        width: scale(332),
        height: scale(170),
        backgroundColor: COLOR_CONST.lightPink,
        borderRadius: scale(10),
        marginRight: scale(21.5),
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.01,
        shadowRadius: 1,
        elevation: 1,
        marginBottom: verticalScale(25),
        overflow: 'hidden'
    },

    bannerIcon: {
        width: scale(332),
        height: scale(170),
    },

    mediaCell: {
        width: scale(332),
        height: scale(170),
        backgroundColor: COLOR_CONST.lightGreenColor,
        borderRadius: scale(10),
        marginRight: scale(21.5),
        marginLeft: scale(1),
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.01,
        shadowRadius: 1,
        elevation: 1,
        marginBottom: verticalScale(54),
    },

    categoryContainer: {
        marginTop: verticalScale(15),
    },

    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(21.5),
    },

    categoriesText: {
        fontSize: scale(24),
        lineHeight: scale(29),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
    },

    viewAll: {
        fontSize: scale(12),
        lineHeight: scale(15),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyTitleColor,
    },

    categoryList: {
        marginLeft: scale(6.5),
    },

    catImageContainer: {
        height: scale(44)
    },

    categoryCell: {
        marginTop: verticalScale(15),
        width: scale(90),
        height: scale(90),
        backgroundColor: COLOR_CONST.white,
        borderRadius: scale(10),
        marginBottom: verticalScale(1),
        paddingTop: verticalScale(5),
        marginHorizontal: scale(15),
        alignItems: 'center',
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
    },

    iconStyle: {
        width: scale(68),
        height: scale(43),
    },

    catLabel: {
        fontSize: scale(14),
        lineHeight: scale(22),
        fontFamily: FONTS.SegoeSemibold,
        marginTop: verticalScale(14),
        color: COLOR_CONST.darkTitleColor,
        letterSpacing: scale(1),
        marginBottom: verticalScale(11),
        textAlign: 'center'
    },

    dealsContainer: {
        alignItems: 'center',
    },

    testimonialContainer: {
        marginHorizontal: scale(6.5),
        marginTop: verticalScale(5),
    },

    dealsList: {
        alignItems: 'center',
        marginHorizontal: scale(13),
        paddingTop: verticalScale(20),
    },

    dealBannerImage: {
        width: scale(159),
        height: scale(180),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(1),
        marginRight: scale(16),
        marginLeft: scale(1),
        borderRadius: scale(10),
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        backgroundColor: COLOR_CONST.white,
        marginBottom: verticalScale(15),
        overflow: 'hidden'
    },

    dealImage: {
        width: scale(135),
        height: scale(180),
    },

    dealCell: {
        marginTop: verticalScale(1),
        marginRight: scale(15),
        marginLeft: scale(1),
        width: scale(159),
        height: scale(180),
        borderRadius: scale(10),
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        backgroundColor: COLOR_CONST.white,
        marginBottom: verticalScale(15),
    },
    
    dealImageContainer: {
        marginTop: verticalScale(11),
        height: scale(71),
        alignItems: 'center',
    },

    outOfStock: {
        fontSize: scale(15),
        position: 'absolute',
        top: verticalScale(28),
        fontFamily: FONTS.SegoeBold,
        color: COLOR_CONST.redLabelColor,
        letterSpacing: scale(1),
        textAlign: 'center'
    },

    dealImageBanner: {
        width: scale(159),
        height: scale(180),
    },

    dealImage: {
        width: scale(97),
        height: scale(71)
    },

    todaysText: {
        fontSize: scale(24),
        lineHeight: scale(29),
        marginLeft: scale(15),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
    },

    dealProductName: {
        fontSize: scale(14),
        lineHeight: scale(22),
        fontFamily: FONTS.SegoeSemibold,
        marginTop: verticalScale(16),
        color: COLOR_CONST.darkTitleColor,
        letterSpacing: scale(1),
        textAlign: 'left',
        marginLeft: scale(5),
    },

    weightRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scale(8),
    },

    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scale(8),
        marginTop: verticalScale(9),
        marginBottom: verticalScale(5),
    },

    hindiText: {
        fontSize: scale(12),
        lineHeight: scale(22),
        fontFamily: FONTS.BalooMedium,
        color: COLOR_CONST.greyTitleColor,
    },

    weight: {
        fontSize: scale(12),
        lineHeight: scale(22),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.redTextColor,
    },

    actualPrice: {
        fontSize: scale(9),
        lineHeight: scale(22),
        position: 'absolute',
        bottom: verticalScale(12),
        textDecorationLine: 'line-through',
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyColor,
    },

    price: {
        fontSize: scale(12),
        lineHeight: scale(22),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
    },

    countRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    countButton: {
        width: scale(21),
        height: scale(21),
        borderRadius: scale(5),
        backgroundColor: COLOR_CONST.greenTheme,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: scale(12),
        color: COLOR_CONST.white,
    },

    countText: {
        fontSize: scale(12),
        lineHeight: scale(22),
        fontFamily: FONTS.SegoeRegular,
        color: COLOR_CONST.darkTitleColor,
        marginHorizontal: scale(8),
    },

    discountLabel: {
        width: scale(22),
        height: scale(22),
        borderRadius: scale(22/2),
        backgroundColor: COLOR_CONST.redLabelColor,
        position: 'absolute',
        top: scale(3),
        right: scale(3),
        justifyContent: 'center',
        alignItems: 'center',
    },

    discountPercent: {
        fontSize: scale(8),
        lineHeight: scale(10),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
    },

    cartButton: {
        width: scale(48),
        height: scale(24),
        borderRadius: scale(10),
        backgroundColor: COLOR_CONST.greenTheme,
        justifyContent: 'center',
        alignItems: 'center'
    },

    outOfStockButton: {
        width: scale(58),
        height: scale(24),
        borderRadius: scale(10),
        backgroundColor: COLOR_CONST.greenTheme,
        justifyContent: 'center',
        alignItems: 'center'
    },

    notifyMe: {
        fontSize: scale(9),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
    },

    testimonialList: {
        marginHorizontal: scale(15)
    },

    testimonialCell: {
        width: scale(270),
        height: scale(120),
        marginRight: scale(15),
        marginTop: verticalScale(15),
        marginLeft: scale(1),
        borderRadius: scale(20),
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        backgroundColor: COLOR_CONST.white,
        marginBottom: verticalScale(20)
    },

    feedback: {
        fontSize: scale(14),
        marginHorizontal: scale(13),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        marginTop: verticalScale(17),
        fontFamily: FONTS.CorbelRegular,
        color: COLOR_CONST.darkTitleColor,
    },

    authorName: {
        fontSize: scale(14),
        textAlign: 'right',
        marginRight: scale(17),
        lineHeight: scale(22),
        marginBottom: verticalScale(17),
        letterSpacing: scale(1),
        marginTop: verticalScale(20),
        fontFamily: FONTS.CorbelRegularItalic,
        color: COLOR_CONST.darkTitleColor,
    },

    mediaText: {
        fontSize: scale(24),
        lineHeight: scale(29),
        marginBottom: verticalScale(20),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
    },

    modalContainer: {
        flex: 1,
        backgroundColor: COLOR_CONST.modalTransparentBg,
        justifyContent: 'center',
        alignItems: 'center'
    },

    popup: {
        width: scale(330),
        backgroundColor: COLOR_CONST.white,
        borderRadius: scale(10),
        alignItems: 'center'
    },

    someItemText: {
        fontSize: scale(14),
        lineHeight: scale(20),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        marginTop: verticalScale(26),
        textAlign: 'center'
    },
    
    removeButton: {
        width: scale(95),
        height: scale(32),
        marginTop: verticalScale(15),
        borderRadius: scale(14),
        backgroundColor: COLOR_CONST.greenTheme,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(19)
    },
    
    removeText: {
        fontSize: scale(17),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
    }


});
