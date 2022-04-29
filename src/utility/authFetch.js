import axios from "axios";
import {store} from "../frontPages/store/store";


export const authFetchTest = async ({input, init, type, data}) => {
    const token = await store.getState().authReducer.token
    console.log('token',token)
    init = init || {}
    init.headers = {
        ...init.headers,
        Authorization: `Bearer ${token}`
    }
    if (type === 'get'){
        return await axios.get(input, init)
    }
    if (type === 'post'){
        return await axios.post(input, data, init)
    }
}

// export const test =