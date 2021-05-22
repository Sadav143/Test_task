import * as USER_CONST from "../../utils/Constants";


export const onLoginUser = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.LOGIN_USER,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const saveLoginStatus = (data) => {
    return {
        type: USER_CONST.SAVE_LOGIN_STATUS,
        payload: {
            data
        }
    }
}

export const onLogoutUser = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.LOGOUT_USER,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const removeLoginStatus = () => {
    return {
        type: USER_CONST.REMOVE_LOGIN_STATUS
    }
}

export const verifyUser = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.VERIFY_USER,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const resendOTP = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.RESEND_OTP,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const getProfile = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_PROFILE,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const saveProfile = (data) => {
    return {
        type: USER_CONST.SAVE_PROFILE,
        payload: {
            data
        }
    }
}

export const saveUserLocation = (data) => {
    return {
        type: USER_CONST.SAVE_USER_LOCATION,
        payload: {
            data
        }
    }
}

export const saveUserDepo = (data) => {
    return {
        type: USER_CONST.SAVE_USER_DEPO,
        payload: {
            data
        }
    }
}

export const updateProfile = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.UPDATE_PROFILE,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const getAddressList = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_ADDRESS_LIST,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const addAddress = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.ADD_ADDRESS,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const updateAddress = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.UPDATE_ADDRESS,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const deleteAddress = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.DELETE_ADDRESS,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const getCityList = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_CITY_LIST,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}

export const sendDeviceToken = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.SEND_DEVICE_TOKEN,
        payload: {
            data,
            successCallBack, 
            failureCallBack
        }
    }
}