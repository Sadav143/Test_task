import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import ColorConstants, { colours, FONTS } from '../../theme/ColorConstants';
import * as CONST from '../../theme/StringConstants';

export default StyleSheet.create({

    drawerContent: {
        // flex: 1,
    },

    drawerContainer: { 
        width: scale(267),
        flex: 1,
        justifyContent: 'space-between'
    },

    userInfoSection: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatarImage: {
        height: scale(52),
        width: scale(52),
        marginLeft: scale(20),
        marginTop: verticalScale(28.07),
        backgroundColor: 'transparent',
    },

    drawerIcon: {
        height: scale(25),
        width: scale(25),
        justifyContent: 'center',
        alignItems: 'center'
    },

    userName: {
        marginTop: verticalScale(39),
        marginLeft: scale(22),
        fontSize: scale(14),
        lineHeight: scale(16.78),
        fontFamily: FONTS.SegoeSemibold,
        color: ColorConstants.darkTitleColor    
    },

    profileName: {
        marginTop: verticalScale(36.07),
        marginLeft: scale(8),
        fontSize: scale(17),
        lineHeight: scale(20),
        color: ColorConstants.drawerProfileNameColor,
    },

    profileSubText: {
        marginLeft: scale(8),
        fontSize: scale(13),
        lineHeight: scale(16),
        color: ColorConstants.drawersubtextColor,
    },

    caption: {
        fontSize: 14,
        color: '#fff',
        lineHeight: 14,
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    drawerLabelStyle: {
        fontSize: scale(13),
        lineHeight: scale(16),
        marginLeft: scale(23),
        color: ColorConstants.friendSuggestionCellColor,
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
        color: '#fff',
    },

    drawerSection: {
        marginTop: scale(24),
        // marginLeft: scale(15),
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

    logOutText: {
        marginTop: verticalScale(340), 
        marginLeft: scale(181), 
        marginBottom: verticalScale(22),
    },
    
    logoutButton: {
        height: scale(100),
    },

    logout: {
        fontSize: scale(13),
        lineHeight: scale(16),
        position: 'absolute', 
        bottom: verticalScale(30), 
        right: verticalScale(25), 
        color: ColorConstants.white,
    },

    crossButton: {
        position: 'absolute', 
        top: verticalScale(36), 
        right: verticalScale(21), 
    },

    crossIcon: {
        width: scale(18),
        height: scale(18),
    },

    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(19),
    },

    locationText: {
        marginLeft: scale(21),
        fontSize: scale(15),
        lineHeight: scale(17.98),
        fontFamily: FONTS.SegoeSemibold,
        color: ColorConstants.darkTitleColor
    },

    locationIcon: {
        width: scale(20),
        height: scale(20),
        marginLeft: scale(8)
    },

    homeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(14.96),
        marginHorizontal: scale(22.38),
    },

    homeIcon: {
        width: scale(21.25),
        height: scale(20.07),
    },

    address: {
        marginLeft: scale(9.38),
        fontSize: scale(14),
        letterSpacing: scale(1),
        lineHeight: scale(16.78),
        fontFamily: FONTS.SegoeSemibold,
        color: ColorConstants.darkTitleColor
    },

    dottedLine: {
        width: scale(113),
        height: scale(1),
        marginTop: verticalScale(10),
        borderStyle: 'dotted',
        textDecorationStyle: 'dashed',
        marginLeft: scale(24),
    },

    menuItemText: {
        marginTop: verticalScale(24),
        marginLeft: scale(21),
        letterSpacing: scale(1),
        fontSize: scale(15),
        lineHeight: scale(22),
        fontFamily: FONTS.SegoeSemibold,
        color: ColorConstants.darkTitleColor
    },

    bottomView: {
        alignItems: 'center'
    },

    helpText: {
        letterSpacing: scale(1),
        fontSize: scale(10),
        lineHeight: scale(22),
        fontFamily: FONTS.CorbelBold,
        color: ColorConstants.darkTitleColor
    },

    privacyText: {
        letterSpacing: scale(1),
        fontSize: scale(10),
        lineHeight: scale(18),
        fontFamily: FONTS.CorbelBold,
        color: ColorConstants.darkTitleColor,
        marginBottom: verticalScale(24),
    },

    bottomLine: {
        width: scale(267),
        height: scale(1),
        backgroundColor: ColorConstants.darkTitleColor,
        marginVertical: verticalScale(8),
    }
    
});
