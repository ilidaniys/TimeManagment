import {
    START_GET_USER,
    SET_USER_NAME,
    SET_USER_EMAIL,
    SET_USER_SPEND_TIME,
    SET_USER_SESSION, SET_PROFILE_URL
} from "./ProfileAuthType";


const defaultProfileState = {
    name: '',
    email: '',
    spendTime: 0,
    sessions: [],
    url: ''
}



export const profileReducer = (state = defaultProfileState, action) => {
    switch (action.type){
        case SET_USER_NAME:
            return {...state, name: action.payload}
        case SET_USER_EMAIL:
            return {...state, email: action.payload}
        case SET_USER_SPEND_TIME:
            return {...state, spendTime: action.payload}
        case SET_USER_SESSION:
            return {...state, sessions: action.payload}
        case SET_PROFILE_URL:
            return {...state, url: action.payload}
        default:
            return state
    }
}

export const getUserNameCreator = (payload) => ({type: SET_USER_NAME, payload})
export const getUserEmailCreator = (payload) => ({type: SET_USER_EMAIL, payload})
export const getUserSpendTimeCreator = (payload) => ({type: SET_USER_SPEND_TIME, payload})
export const getUserSessionCreator = (payload) => ({type: SET_USER_SESSION, payload})
export const asyncGetUserCreator = () => ({type: START_GET_USER})