import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import { FONTS } from '../../../app/theme/ColorConstants';
import * as CONST from '../../theme/StringConstants';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

    headerTitleStyle: {
        fontSize: scale(20),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
        marginLeft: scale(23.75),
        letterSpacing: scale(1),
    },

    backButton: {
        paddingVertical: verticalScale(20),
        paddingRight: scale(20),
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

    backContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: scale(19),
        marginTop: verticalScale(29),
    },

    backIcon: {
        width: scale(18),
        height: scale(18),
    },

    productName: {
        fontSize: scale(24),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        marginLeft: scale(21),
    },

    currentStatus: {
        marginTop: verticalScale(8),
    },

    statusText: {
        fontSize: scale(18),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyColor,
        marginLeft: scale(21),
    },

    statusDetailCell: {
        width: scale(331),
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
        backgroundColor: COLOR_CONST.white,
        alignSelf: 'center',
        borderRadius: scale(10),
        marginBottom: verticalScale(2)
    },

    cartButton: {
        width: scale(38),
        height: scale(26),
        borderRadius: scale(10),
        backgroundColor: COLOR_CONST.greenTheme,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    upperRow: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: verticalScale(8),
        marginHorizontal: scale(11),
    },

    fruitsImage: {
        width: scale(69),
        height: scale(49),
    },

    orderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: scale(227),
    },

    orderNoText: {
        fontSize: scale(14),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
    },

    rightArrowIcon: {
        width: scale(10),
        height: scale(10),
    },

    cancelText: {
        fontSize: scale(14),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.redLabelColor,
        marginLeft: scale(21),
    },

    priceText: {
        fontSize: scale(14),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        marginTop: verticalScale(8)
    },

    noItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    noItems: {
        fontSize: scale(10),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.redLabelColor,
        marginTop: verticalScale(8)
    },

    callText: {
        fontSize: scale(10),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
    },

    horizontalLine: {
        width: scale(331),
        height: scale(0.3),
        backgroundColor: COLOR_CONST.greyColor,
        marginTop: verticalScale(4),
        opacity: 0.5
    },

    currentStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(16),
    },

    statusTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scale(25),
        marginBottom: verticalScale(14),
    },

    dotRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    activeDot: {
        width: scale(18),
        height: scale(18),
    },

    statusLine: {
        width: scale(100),
        height: scale(0.5),
        backgroundColor: COLOR_CONST.greyColor
    },

    statusCurrentText: {
        fontSize: scale(8),
        lineHeight: scale(10),
        textAlign: 'center',
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        marginTop: verticalScale(10)
    },

    recentOrderListContainer: {
        marginTop: verticalScale(24),
    },

    recentCell: {
        width: scale(331),
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
        backgroundColor: COLOR_CONST.white,
        alignSelf: 'center',
        borderRadius: scale(10),
        marginTop: verticalScale(8),
        marginBottom: verticalScale(16),
        paddingBottom: verticalScale(4),
    },

    recentOrdersText: {
        fontSize: scale(18),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyColor,
        marginLeft: verticalScale(20)
    },

    upperRow1: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: verticalScale(8),
        marginHorizontal: scale(11),
    },

    fruitsImage1: {
        width: scale(69),
        height: scale(49),
    },

    rightDetail: {
        marginLeft: scale(16),
    },

    rightDetail1: {
        marginLeft: scale(16),
    },

    orderRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    orderNoText1: {
        fontSize: scale(14),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
    },

    rightArrowIcon1: {
        width: scale(10),
        height: scale(10),
        marginLeft: scale(74),
    },

    cancelText1: {
        fontSize: scale(14),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.redLabelColor,
        marginLeft: scale(21),
    },

    priceText1: {
        fontSize: scale(14),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        marginTop: verticalScale(8)
    },

    noItemRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    noItems1: {
        fontSize: scale(10),
        lineHeight: scale(22),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.redLabelColor,
    },

    orderStatus: {
        fontSize: scale(10),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyColor,
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(16),
    },

    buttonRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(40),
    },

    verticalLine: {
        width: scale(1),
        height: scale(38),
        backgroundColor: COLOR_CONST.greyColor,
        opacity: 0.5
    },

    reorder: {
        fontSize: scale(14),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greenTheme,
    },

    feedback: {
        fontSize: scale(14),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
    },

    horizontalLine1: {
        width: scale(331),
        height: scale(1),
        backgroundColor: COLOR_CONST.greyColor,
        marginTop: verticalScale(4),
        opacity: 0.5
    },

    modalContainer: {
        flex: 1,
        backgroundColor: COLOR_CONST.modalTransparentBg,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    popup: {
        width: Dimensions.get('window').width,
        backgroundColor: COLOR_CONST.white,
        borderTopLeftRadius: scale(10),
        borderTopRightRadius: scale(10),
    },

    backContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: scale(19),
        marginTop: verticalScale(18),
        marginLeft: scale(16),
    },

    backIcon1: {
        width: scale(18),
        height: scale(18),
    },

    arrowBack: {
        width: scale(18),
        height: scale(18),
        marginTop: verticalScale(20),
        marginLeft: scale(20),
    },

    productName1: {
        fontSize: scale(20),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        marginLeft: scale(16),
        letterSpacing: scale(1)
    },

    inputContainer1: {
        borderWidth: scale(1),
        borderRadius: scale(10),
        borderColor: COLOR_CONST.greyColor,
        height: scale(100),
        paddingLeft: scale(10),
        paddingBottom: scale(5),
        color: COLOR_CONST.darkTitleColor,
        marginTop: verticalScale(7),
        marginRight: scale(16),
        fontFamily: FONTS.SegoeSemibold
    },

    dobInputContainer: {
        marginLeft: scale(16),
        marginTop: verticalScale(16),
    },

    saveText: {
        fontSize: scale(20),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
        letterSpacing: scale(1)
    },

    labelStyle: {
        fontSize: scale(10),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyColor,
        lineHeight: scale(12),
    },

    saveButton: {
        zIndex: 1000,
        width: scale(343),
        height: scale(50),
        borderRadius: scale(10),
        backgroundColor: COLOR_CONST.greenTheme,
        alignSelf: 'center',
        marginTop: verticalScale(16),
        marginBottom: verticalScale(38),
        justifyContent: 'center',
        alignItems: 'center',
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

});
