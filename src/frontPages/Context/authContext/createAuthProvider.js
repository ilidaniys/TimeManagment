import createTokenProvider from "./createTokenProvider";
import {useEffect, useState} from "react";
import axios from "axios";

//
// export const createAuthProvider = () => {
//
//     const tokenProvider = createTokenProvider()
//
//     // const useAuth = () => {
//     //     const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn)
//     //
//     //     useEffect(() => {
//     //         const listener = newIsLogged => {
//     //             setIsLogged(newIsLogged)
//     //         }
//     //         tokenProvider.subscribe(listener)
//     //         return () => {
//     //             tokenProvider.unSubscribe(listener())
//     //         }
//     //     }, [])
//     //     return [isLogged]
//     // }
//
//     return {
//         useAuth,
//         authFetch,
//         login,
//         logout
//     }
// }
//
// export const {useAuth, authFetch, login, logout} = createAuthProvider()