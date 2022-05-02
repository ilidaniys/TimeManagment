import {put, takeEvery} from 'redux-saga/effects';
import {START_GET_USER} from "./ProfileAuthType";
import {authFetch} from "../../../utility/authFetch";
import {store} from "../store";
import {
    getUserCreator,
} from "./ProfileReducer";

const userAxios = () => new Promise((resolve, reject) => {
        const url = store.getState().profileReducer.url
        console.log('url saga', url)
        authFetch(url, {
            method: 'GET',
        }, 'get')
            .then(res => {
                console.log('profile data', res.data)
                resolve(res.data)
            })
            .catch((e) => {
                reject(e)
            })
    }
)

function* userAxiosWorker() {
    const data = yield userAxios()
    yield put(getUserCreator(data))
}

export function* userWatcher() {
    yield takeEvery(START_GET_USER, userAxiosWorker)
}
