import {put, takeEvery} from "redux-saga/effects";

import {setAuthStatusCreator, setAuthTokenCreator} from "./AuthReducer";
import {store} from "../store";
import {START_GET_USER_STATUS} from "./AuthReducerType";

// const getExpirationDate = (jwtToken) => {
//     if (!jwtToken) return null
//     const jwt = JSON.parse(atob(jwtToken.split('.')[1]))
//     return (jwt && jwt.exp && jwt.exp * 1000) || null
// }
//
// const isExpired = (exp) => {
//     if (!exp) {
//         return false
//     }
//     return Date.now() > exp
// }
const getToken = () => {
    let _token = {
        accessToken: localStorage.getItem('TOKEN'),
        // refreshToken: ''
    }
    if (!_token) return null
    // if (isExpired(getExpirationDate(_token.accessToken))) {
    //     console.log('isExpired(getExpirationDate(_token.accessToken)) true')
    //     const updateToken = axios.get('http://localhost:5000/token')
    //         .then(res => res.json())
    //         .catch(e => console.log(e))
    //     setToken(updateToken)
    // }
    // console.log('_token', _token)
    console.log('_token', _token)
    return _token.accessToken
}

const getStatus = () => {
    return !!store.getState().authReducer.token;
}

function* authWorker() {
    // const data = yield call(authFetch, {})
    yield put()
}

export function* authWatcher() {
    yield put(setAuthTokenCreator(getToken()))
    yield put(setAuthStatusCreator(getStatus()))
    // console.log('getToken()', getToken())
    // console.log('put')
    yield takeEvery(START_GET_USER_STATUS, authWorker)
}
