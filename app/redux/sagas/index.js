import {
    takeEvery,
    takeLatest
  } from 'redux-saga/effects';

import * as CONST from '../../utils/Constants'
import { getHomeScreenData } from './homeScreenSaga';

  
  const watchLogin = function* watchLogin() {
    //* USER_CALLS *//
    yield takeEvery(CONST.GET_HOME_SCREEN_DATA, getHomeScreenData);

  };
  
  /*
    Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
    Allows concurrent fetches of user.
  */
  const Sagas = function* mySagas() {
    yield watchLogin();
  };
  /*
    Alternatively you may use takeLatest.
  
    Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
    dispatched while a fetch is already pending, that pending fetch is cancelled
    and only the latest one will be run.
  */
  // function* mySaga() {
  //   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  // }
  
  export default Sagas;
  