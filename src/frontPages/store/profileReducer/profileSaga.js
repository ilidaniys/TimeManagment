import {put, takeEvery, call} from 'redux-saga/effects';
import {START_GET_USER} from "./ProfileAuthType";
import {authFetch} from "../../../utility/authFetch";
import {SecondToDate} from "../../component/CounterLogic/CounterFunction";
import {store} from "../store";
import {
    getUserEmailCreator,
    getUserNameCreator,
    getUserSessionCreator,
    getUserSpendTimeCreator
} from "./ProfileReducer";

const userAxios = () => {
    const url = store.getState().profileReducer.url
    console.log('url', url)
    try {
        authFetch(url, {
            method: 'GET',
        }, 'get')
            // .then(res => {
            //     // console.log('profile data', res.data)
            //     setName(res.data.name)
            //     setEmail(res.data.email)
            //     setSpendTime(SecondToDate(res.data.allTime))
            //     setSessions(res.data.sessions)
            // })
    } catch (e) {
        console.log(e)
    }
}

function* userAxiosWorker () {
    const data = yield call(userAxios)
    console.log('data', data)
    yield put(getUserNameCreator(data.name))
    yield put(getUserEmailCreator(data.email))
    yield put(getUserSpendTimeCreator(data.spendTime))
    yield put(getUserSessionCreator(data.session))
}

export function* userWatcher () {


    yield takeEvery(START_GET_USER, userAxiosWorker)
}
