import {START_GET_USER, SET_USER} from "./ProfileAuthType";


const defaultProfileState = {
    name: '',
    email: '',
    spendTime: 0,
    sessions: ''
}




export const profileReducer = (state = defaultProfileState, action) => {
    switch (action.type){
        case SET_USER:
            return {...state, }
        default:
            return state
    }
}

export const getUserCreator = (payload) => ({type: SET_USER, payload: payload})
export const asyncGetUserCreator = () => ({type: START_GET_USER})