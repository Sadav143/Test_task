import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import { FONTS } from '../../../app/theme/ColorConstants';
import * as CONST from '../../theme/StringConstants';
const { height, width } = Dimensions.get('window');

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
        marginRight: scale(17.5),
    },

    shopIcon1: {
        width: scale(21),
        height: scale(21),
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
        letterSpacing: scale(1)
    },

    profileFormContainer: {
        marginTop: verticalScale(32),
    },

    textInputContainer: {
        marginLeft: scale(16),
    },

    dobInputContainer: {
        marginLeft: scale(16),
        marginTop: verticalScale(16),
    },

    smallInputContainer: {
        width:scale(140),
        marginTop: verticalScale(16),
    },

    dropDownContainer: {
        marginLeft: scale(16),
        marginTop: verticalScale(16),
        width: scale(125),
    },

    labelStyle: {
        fontSize: scale(10),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyColor,
        lineHeight: scale(12),
    },

    dropLabelStyle: {
        fontSize: scale(10),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyColor,
        lineHeight: scale(12),
        marginBottom: verticalScale(8),
    },

    inputContainer: Platform.OS === 'ios' ? {
        borderBottomWidth: scale(2),
        borderBottomColor: COLOR_CONST.greyColor,
        height: scale(32),
        paddingLeft: 0,
        paddingBottom: scale(5),
        color: COLOR_CONST.darkTitleColor,
        marginRight: scale(16),
        fontFamily: FONTS.SegoeSemibold
    } :  {
        borderBottomWidth: scale(2),
        borderBottomColor: COLOR_CONST.greyColor,
        paddingLeft: 0,
        paddingBottom: scale(5),
        color: COLOR_CONST.darkTitleColor,
        marginRight: scale(16),
        fontFamily: FONTS.SegoeSemibold
    },

    dobContainer: {
        borderBottomWidth: scale(2),
        borderBottomColor: COLOR_CONST.greyColor,
        height: scale(32),
        color: COLOR_CONST.darkTitleColor,
        marginRight: scale(16),
        fontFamily: FONTS.SegoeSemibold,
        width: width - 32,
        alignItems: 'flex-start'
    },

    dob: {
        width: width,
        paddingBottom: 10,
        borderWidth: 0,
        textAlign: 'left',
        alignSelf: 'flex-start'
    },

    dobBody: {
        width: width,
        paddingBottom: 10,
        borderWidth: 0,
    },

    placeholderText: {
        alignSelf: 'flex-start',
        color: COLOR_CONST.greyTitleColor
    },

    placeholderRedText: {
        alignSelf: 'flex-start',
        color: COLOR_CONST.greyTitleColor
    },

    dateText:  {
        alignSelf: 'flex-start',
        fontSize: scale(14),
        fontFamily: FONTS.SegoeSemibold
    },

    horizontalLine: {
        width: width,
        height: scale(0.5),
        backgroundColor: COLOR_CONST.greyColor,
        marginTop: verticalScale(32),
    },

    myAddressContainer: {
        flex: 1,
        marginTop: verticalScale(16),
    },

    myAddressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: scale(16),
        marginRight: scale(27),
    },

    myAddressText: {
        fontSize: scale(18),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
    },
    
    plusButton: {
        width: scale(48),
        height: scale(24),
        backgroundColor: COLOR_CONST.greenTheme,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(10),
    },
    
    plusText: {
        fontSize: scale(20),
        color: COLOR_CONST.white,
        paddingBottom: scale(3)
    },

    addressListContainer: {
        flex: 1,
        marginTop: verticalScale(26),
    },
    
    addressCell: {
        width: scale(332),
        alignSelf: 'center',
        backgroundColor: COLOR_CONST.white,
        shadowColor: COLOR_CONST.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
        borderRadius: scale(10),
        marginBottom: verticalScale(16),
    },

    locationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(11),
        marginTop: verticalScale(9.69),
    },

    homeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    toolRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    locationIcon: {
        width: scale(13.59),
        height: scale(18.28),
    },
    
    homeText: {
        fontSize: scale(14),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        marginLeft: scale(11.29),
    },

    defaultText: {
        fontSize: scale(10),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemiboldItalic,
        color: COLOR_CONST.greyColor,
        marginLeft: scale(8),
    },

    editIcon: {
        width: scale(18),
        height: scale(18),
    },

    deleteIcon: {
        width: scale(18),
        height: scale(18),
        marginLeft: scale(17),
    },

    addressText: {
        width: scale(316),
        fontSize: scale(12),
        lineHeight: scale(22),
        letterSpacing: scale(1),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyTitleColor,
        marginLeft: scale(11.29),
        marginTop: verticalScale(8),
    },

    mobText: {
        width: scale(316),
        fontSize: scale(8),
        lineHeight: scale(22),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greyTitleColor,
        marginLeft: scale(11.29),
        marginTop: verticalScale(2),
        marginBottom: verticalScale(8),
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

    inputContainer1: Platform.OS === 'ios' ? {
        borderBottomWidth: scale(2),
        borderBottomColor: COLOR_CONST.greyColor,
        height: scale(32),
        paddingLeft: 0,
        paddingBottom: Platform.OS === 'ios' ? scale(5) : scale(5),
        color: COLOR_CONST.darkTitleColor,
        marginTop: verticalScale(7),
        marginRight: scale(16),
        fontFamily: FONTS.SegoeSemibold
    } : {
        borderBottomWidth: scale(2),
        borderBottomColor: COLOR_CONST.greyColor,
        paddingLeft: 0,
        paddingBottom: scale(5),
        color: COLOR_CONST.darkTitleColor,
        marginTop: verticalScale(7),
        marginRight: scale(16),
        fontFamily: FONTS.SegoeSemibold
    },

    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: scale(16),
        marginTop: verticalScale(8),
    },

    saveAs: {
        fontSize: scale(10),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.darkTitleColor,
        marginLeft: scale(6),
        letterSpacing: scale(1)
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

    saveButton1: {
        zIndex: 1000,
        width: scale(202),
        height: scale(38),
        borderRadius: scale(10),
        backgroundColor: COLOR_CONST.greenTheme,
        alignSelf: 'center',
        marginTop: verticalScale(24),
        justifyContent: 'center',
        alignItems: 'center',
    },

    saveText: {
        fontSize: scale(20),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.white,
        letterSpacing: scale(1)
    },

    dropdownConatinerStyle: {
        height: scale(30),
        width: scale(141),
        fontSize: scale(13),
        lineHeight: scale(16),
        paddingLeft: 0,
    },

    dropContainer: Platform.OS === 'ios' ? { 
        backgroundColor: COLOR_CONST.lightGreyShade,
        height: scale(25),
        paddingHorizontal: scale(8),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: scale(2),
        borderBottomColor: COLOR_CONST.greyColor,
    } : { 
        backgroundColor: COLOR_CONST.lightGreyShade,
        paddingHorizontal: scale(8),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: scale(2),
        borderBottomColor: COLOR_CONST.greyColor,
    },

    downIcon: {
        width: scale(20),
        height: scale(20),
        marginTop: Platform.OS === 'ios' ? 0 : verticalScale(18)
    },

    rowField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    rowField1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(16),
    },

    currentButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(50),
        position: 'absolute',
        top: verticalScale(0),
        right: scale(16),
        zIndex: 1000,
    },

    currentLocation: {
        fontSize: scale(11),
        fontFamily: FONTS.SegoeSemibold,
        color: COLOR_CONST.greenTheme,
        letterSpacing: scale(1)
    }
});
