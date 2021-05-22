import * as USER_CONST from "../../utils/Constants";


export const getHomeScreenData = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_HOME_SCREEN_DATA,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const setHomeScreenCategories = (data) => {
    return {
        type: USER_CONST.SET_HOME_SCREEN_CATEGORIES,
        payload: {
            data
        }
    }
}

export const setHomeScreenTodayDeal = (data) => {
    return {
        type: USER_CONST.SET_HOME_SCREEN_TODAY_DEAL,
        payload: {
            data
        }
    }
}