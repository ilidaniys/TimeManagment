import {SET_ADMIN_STATUS, SET_STATUS, SET_TOKEN} from "./AuthReducerType";


const defaultAuthState = {
    token: '',
    status: '',
    adminStatus: false
}

export const authReducer = (state = defaultAuthState, action) => {
    switch (action.type){
        case SET_TOKEN:
            return {...state, token: action.payload}
        case SET_STATUS:
            return {...state, status: action.payload}
        case SET_ADMIN_STATUS:
            return {...state, adminStatus: action.payload}
        default:
            return state
    }
}

export const setAuthTokenCreator = (payload) => ({type: SET_TOKEN, payload: payload})
export const setAuthStatusCreator = (payload) => ({type: SET_STATUS, payload: payload})
export const setAuthAdminStatusCreator = (payload) => ({type: SET_ADMIN_STATUS, payload: payload})