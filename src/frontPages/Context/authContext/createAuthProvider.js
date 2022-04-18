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

    const authFetch = async (input, init) => {
        const token = await tokenProvider.getToken()
        console.log(token)
        init = init || {}

        init.headers = {
            ...init.headers,
            Authorization: `Bearer ${token}`
        }
        return await axios.get(input, init)
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