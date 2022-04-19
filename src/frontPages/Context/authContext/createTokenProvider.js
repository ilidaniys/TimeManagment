
import axios from "axios";


const createTokenProvider = () => {
    let _token = {
        accessToken: localStorage.getItem('TOKEN'),
        refreshToken: ''
    }

    const getExpirationDate = (jwtToken) => {
        if (!jwtToken) return null
        const jwt = JSON.parse(atob(jwtToken.split('.')[1]))
        return (jwt && jwt.exp && jwt.exp * 1000) || null
    }

    const isExpired = (exp) => {
        if (!exp) {
            return false
        }
        return Date.now() > exp
    }

    const getToken = async () => {
        if (!_token) return null
        if (isExpired(getExpirationDate(_token.accessToken))) {
            // console.log(isExpired(getExpirationDate(_token.accessToken)))
            const updateToken = axios.get('http://localhost:5000/token')
                .then(res => res.json())
                .catch(e => console.log(e))
            setToken(updateToken)
        }
        return _token && _token.accessToken
    }

    const isLoggedIn = () => {
        return !!_token
    }

    let observers = []
    const subscribe = observer => observers.push(observer)
    const unSubscribe = observer => {
        observers = observers.filter(_observer => _observer !== observer)
    }
    const notify = () => {
        const isLogged = isLoggedIn()
        observers.forEach(observer => observer(isLogged))
    }

    const setToken = (token) => {
        if (token) {
            localStorage.setItem('TOKEN', token)
        } else {
            localStorage.removeItem('TOKEN')
        }
        _token.accessToken = token
        notify()
    }


    return {
        getToken,
        isLoggedIn,
        setToken,
        subscribe,
        unSubscribe
    }
};

export default createTokenProvider;