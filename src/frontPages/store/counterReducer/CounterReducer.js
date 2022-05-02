import {
    SET_CURRENT_COUNTER,
    SET_END_COUNTER,
    SET_START_COUNTER,
    START_SET_END_COUNTER,
    START_SET_START_COUNTER
} from "./CounterType";
import {SecondToDate} from "../../component/CounterLogic/CounterFunction";


const defaultCounterState = {
    startCounter: 0,
    currentCounter: SecondToDate(0),
    endCounter: 0,
}


export const counterReducer = (state = defaultCounterState, action) => {
    switch (action.type) {
        case SET_START_COUNTER:
            return {...state, startCounter: action.payload}
        case SET_CURRENT_COUNTER:
            return {...state, currentCounter: action.payload}
        case SET_END_COUNTER:
            return {...state, endCounter: action.payload}
        default:
            return state
    }
}


export const startCounterCreator = (payload) => ({type: SET_START_COUNTER, payload})
export const setStartCounterCreator = (payload) => ({type: START_SET_START_COUNTER, payload})

export const currentCounterCreator = (payload) => ({type: SET_CURRENT_COUNTER, payload})
export const endCounterCreator = (payload) => ({type: SET_END_COUNTER, payload})
export const setEndCounterCreator = (payload) => ({type: START_SET_END_COUNTER, payload})