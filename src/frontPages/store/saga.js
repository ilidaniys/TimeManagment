import {all} from  'redux-saga/effects'
import {userWatcher} from "./profileReducer/profileSaga";
import {authWatcher} from "./authReducer/authSaga";

export function* rootWatcher () {
    yield all([userWatcher(), authWatcher()])
}
