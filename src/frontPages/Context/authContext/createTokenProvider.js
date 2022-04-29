//
// import axios from "axios";
//
//
// const createTokenProvider = () => {
//
//
//
//     const getToken = async () => {
//         let _token = {
//             accessToken: localStorage.getItem('TOKEN'),
//             refreshToken: ''
//         }
//         if (!_token) return null
//         // if (isExpired(getExpirationDate(_token.accessToken))) {
//         //     console.log('isExpired(getExpirationDate(_token.accessToken)) true')
//         //     const updateToken = axios.get('http://localhost:5000/token')
//         //         .then(res => res.json())
//         //         .catch(e => console.log(e))
//         //     setToken(updateToken)
//         // }
//         // console.log('_token', _token)
//         return _token && _token.accessToken
//     }
//
// const isLoggedIn = () => {
//     return !!_token
// }
//
// let observers = []
// const subscribe = observer => observers.push(observer)
// const unSubscribe = observer => {
//     observers = observers.filter(_observer => _observer !== observer)
// }
// const notify = () => {
//     const isLogged = isLoggedIn()
//     observers.forEach(observer => observer(isLogged))
// }
//
// const setToken = (token) => {
//     if (token) {
//         localStorage.setItem('TOKEN', token)
//     } else {
//         localStorage.removeItem('TOKEN')
//     }
//     _token.accessToken = token
//     // notify()
// }
//
//
//     return {
//         getToken,
//         isLoggedIn,
//         setToken,
//         subscribe,
//         unSubscribe
//     }
// };
//
// export default createTokenProvider;