/**
 * @UserSaga will listen for the requests of user related stuffs, call a api using apiService and return back to corresponding reducer
 */

import {
    call, put
  } from 'redux-saga/effects';
  import * as API_SERVICE from '../../services/apiService/AxioUtils';
  import * as commonActions from '../actions/commonActions';
  import * as homeScreenActions from '../actions/homeScreenActions';
  
  //*> GET HOME SCREEN DATA SAGA
  export function* getHomeScreenData(action) {
    let path = `customer/homePageList`;
    try {
      yield put(commonActions.startSpinner());
      const res = yield call(API_SERVICE.performPostRequest, path, action.payload.data);
      console.log('@@@ Get Home Screen Data List Response =======', res);
      if (res !== undefined && res.status === 200) {
          yield put(commonActions.stopSpinner());
          yield put(homeScreenActions.setHomeScreenTodayDeal(res.data.data));
          action.payload.successCallBack(res.data);
      } else {
        yield put(commonActions.stopSpinner());
        action.payload.failureCallBack(null);
      }
    } catch (error) {
        console.log('@@@ Get Home Screen Data List error ========', error);
        yield put(commonActions.stopSpinner());
        if(error.request._response && error.request.status !== 0) {
            let response = JSON.parse(error.request._response);
            action.payload.failureCallBack(response.message);
        } else {
            action.payload.failureCallBack(null);
        }
    }
  }