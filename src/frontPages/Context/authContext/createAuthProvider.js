import createTokenProvider from "./createTokenProvider";
import {useEffect, useState} from "react";
import axios from "axios";


export const createAuthProvider = () => {
    const tokenProvider = createTokenProvider()
    const login = newTokens => {
        tokenProvider.setToken(newTokens)
    }
    const logout = () => {
        tokenProvider.setToken(null)
    }

    const authFetch = async (input, init, type, data) => {
        const token = await tokenProvider.getToken()
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

    const useAuth = () => {
        const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn)

        useEffect(() => {
            const listener = newIsLogged => {
                setIsLogged(newIsLogged)
            }
            tokenProvider.subscribe(listener)
            return () => {
                tokenProvider.unSubscribe(listener())
            }
        }, [])
        return [isLogged]
    }

    return {
        useAuth,
        authFetch,
        login,
        logout
    }
}

export const {useAuth, authFetch, login, logout} = createAuthProvider()