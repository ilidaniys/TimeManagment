import {put, takeEvery} from "redux-saga/effects";
import {endCounterCreator, startCounterCreator} from "./CounterReducer";
import {authFetch} from "../../../utility/authFetch";
import {START_SET_END_COUNTER, START_SET_START_COUNTER} from "./CounterType";
import {URLI} from "../../../App";


const startCounterHandler = async (startData) => {
    console.log('startCounterHandler')
    // const startData = moment().format('MMMM Do YYYY, h:mm:ss')
    await authFetch(`${URLI}/api/startTime`, {
        method: 'POST',
    }, 'post', {startData})
}
const endCounterHandler = async (endData) => {
    // const endData = moment().format('MMMM Do YYYY, h:mm:ss')
    console.log('endCounterHandler')
    await authFetch(`${URLI}/api/endTime`, {
        method: 'POST',
    }, 'post', {endData})
}


function* startCounterWorker() {
    const startData = new Date()
    yield startCounterHandler(startData)
    yield put(startCounterCreator(startData))
}

function* endCounterWorker() {
    const endData = new Date()
    console.log('end', endData)
    yield endCounterHandler(endData)
    yield put(startCounterCreator(0))
    yield put(endCounterCreator(endData))
}

export function* counterWatcher() {
    yield takeEvery(START_SET_START_COUNTER, startCounterWorker)
    yield takeEvery(START_SET_END_COUNTER, endCounterWorker)
}