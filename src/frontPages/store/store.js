import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profileReducer/ProfileReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";
import {authReducer} from "./authReducer/AuthReducer";
import {counterReducer} from "./counterReducer/CounterReducer";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    profileReducer,
    authReducer,
    counterReducer
})

// noinspection JSDeprecatedSymbols
export const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

sagaMiddleware.run(rootWatcher)