import {call, put, takeEvery} from "redux-saga/effects";
import {START_GET_USER} from "../profileReducer/ProfileAuthType";
import {setAuthTokenCreator} from "./AuthReducer";

const getToken = () => {
    let _token = {
        accessToken: localStorage.getItem('TOKEN'),
        // refreshToken: ''
    }
    if (!_token) return null
    console.log('_token', _token)
    return _token.accessToken
}



function* authWorker () {
    // const data = yield call(authFetch, {})
    yield put()
}

export function* authWatcher () {
    yield put(setAuthTokenCreator(getToken()))
    // console.log('getToken()', getToken())
    // console.log('put')
    yield takeEvery(START_GET_USER, authWorker)
}
