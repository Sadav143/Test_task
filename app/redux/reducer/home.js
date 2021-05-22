import * as USER_CONST from "../../utils/Constants";

const initialState = {
    categories: [],
    todayDeal: []
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case USER_CONST.SET_HOME_SCREEN_CATEGORIES:
            return {
                ...state,
                categories: action.payload.data.categories
            };
        case USER_CONST.SET_HOME_SCREEN_TODAY_DEAL:
            return {
                ...state,
                todayDeal: action.payload.data.todayDeals
            };
        default: {
            return state;
        }
    }
}

export default filters
