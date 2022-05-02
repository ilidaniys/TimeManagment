import {all} from  'redux-saga/effects'
import {userWatcher} from "./profileReducer/profileSaga";
import {authWatcher} from "./authReducer/authSaga";
import {counterWatcher} from "./counterReducer/counterSaga";

export function* rootWatcher () {
    yield all([userWatcher(), authWatcher(), counterWatcher()])
}
