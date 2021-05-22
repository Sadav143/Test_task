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
        fontSize: scale(20),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
        marginLeft: scale(23.75),
        letterSpacing: scale(1),
    },

    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
    },

    shopIcon1: {
        width: scale(21),
        height: scale(21),
    },

    backContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: scale(19),
        marginTop: verticalScale(29),
    },

    priceContainer: {
        marginTop: verticalScale(24),
        paddingVertical: verticalScale(16),
        backgroundColor: COLOR_CONST.white,
        width: scale(332),
        borderRadius: scale(10),
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        alignSelf: 'center',
    },

    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(16),
        marginHorizontal: scale(36),
    },
    
    itemText: {
        fontSize: scale(14),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyTitleColor,
        lineHeight: scale(22),
        letterSpacing: scale(1),
    },
    
    priceText: {
        fontSize: scale(16),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        lineHeight: scale(22),
    },
    
    amountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(8),
        marginHorizontal: scale(36),
    },
    
    amountText: {
        fontSize: scale(16),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        lineHeight: scale(22),
        letterSpacing: scale(1),
    },
    
    priceAmount: {
        fontSize: scale(20),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        lineHeight: scale(22),
    },
    
    checkoutButton: {
        width: scale(202),
        height: scale(38),
        borderRadius: scale(10),
        backgroundColor: COLOR_CONST.greenTheme,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: verticalScale(24),
    },

    checkoutText: {
        fontSize: scale(20),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
        letterSpacing: scale(1),
    },

    itemsView: {
        flex: 1,
        marginTop: verticalScale(32),
    },

    itemsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(21),
    },

    itemsText: {
        fontSize: scale(20),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        lineHeight: scale(22),
        letterSpacing: scale(1),
    },
    
    totalNoText: {
        fontSize: scale(12),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyColor,
        lineHeight: scale(22),
    },

    listContainer: {
        flex: 1,
        marginTop: verticalScale(16),
    },

    orderItemCell: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR_CONST.white,
        width: scale(330),
        borderRadius: scale(10),
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        alignSelf: 'center',
        marginBottom: verticalScale(8),
        paddingVertical: verticalScale(8),
    },

    dealImage: {
        width: scale(70),
        height: scale(52),
        marginLeft: scale(8)
    },

    rightDetails: {
        width: scale(252),
        marginLeft: scale(15),
        marginRight: scale(8),
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: scale(14)
    },

    productText: {
        fontSize: scale(14),
        lineHeight: scale(22),
        fontFamily: FONTS.SegoeSemibold,
        letterSpacing: scale(1),
        color: COLOR_CONST.darkTitleColor,
    },

    productPrice: {
        fontSize: scale(14),
        lineHeight: scale(22),
        marginRight: scale(12),
        fontFamily: FONTS.SegoeSemibold,
        letterSpacing: scale(1),
        color: COLOR_CONST.darkTitleColor,
    },

    productNameHindi: {
        fontSize: scale(12),
        lineHeight: scale(22),
        fontFamily: FONTS.BalooMedium,
        color: COLOR_CONST.greyTitleColor,
    },

    qtyText: {
        fontSize: scale(10),
        lineHeight: scale(22),
        marginRight: scale(12),
        fontFamily: FONTS.SegoeSemibold,
        letterSpacing: scale(1),
        color: COLOR_CONST.darkTitleColor,
    },

    weightText: {
        fontSize: scale(10),
        lineHeight: scale(22),
        fontFamily: FONTS.SegoeSemibold,
        letterSpacing: scale(1),
        color: COLOR_CONST.redLabelColor,
    },
    
    exchangeButton: {
        width: scale(100),
        height: scale(20),
        borderRadius: scale(4),
        backgroundColor: COLOR_CONST.greenTheme,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(12),
    },

    exchangeText: {
        fontSize: scale(10),
        lineHeight: scale(12),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
    },

    countRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: scale(16),
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
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        marginHorizontal: scale(8),
    },

    outOfText: {
        fontSize: scale(15),
        lineHeight: scale(22),
        marginRight: scale(16),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.redTextColor,
    },

    noFoundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    noDataFoundText: {
        fontSize: scale(15),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyColor,
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
        marginVertical: verticalScale(26),
        // width: scale(195),
        alignSelf: 'center'
    },
    
    removeButton: {
        width: scale(95),
        height: scale(32),
        borderRadius: scale(14),
        backgroundColor: COLOR_CONST.greenTheme,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(9)
    },
    
    removeText: {
        fontSize: scale(17),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
    }
    
    
});
