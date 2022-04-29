import {put, takeEvery, call} from 'redux-saga/effects';
import {START_GET_USER} from "./ProfileAuthType";
import axios from "axios";



function* userWorker () {
    // const data = yield call(authFetch, {})
    // yield put()
}

export function* userWatcher () {


    yield takeEvery(START_GET_USER, userWorker)
}
