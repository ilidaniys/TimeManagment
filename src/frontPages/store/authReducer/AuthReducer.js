import {SET_TOKEN} from "./AuthReducerType";


const defaultAuthState = {
    token: {}
}

export const authReducer = (state = defaultAuthState, action) => {
    switch (action.type){
        case SET_TOKEN:
            return {...state, token: action.payload}
        default:
            return state
    }
}

export const setAuthTokenCreator = (payload) => ({type: SET_TOKEN, payload: payload})