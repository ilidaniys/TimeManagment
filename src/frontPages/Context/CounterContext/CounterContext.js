import React, {createContext, useContext,} from 'react';



const CounterProvider = createContext()

export const useCounter = () => {
    return useContext(CounterProvider)
}

const CounterContext = ({children}) => {
//
//     const [startCounter, setStartCounter] = useState('')
//     const [currentCounter, setCurrentCounter] = useState('00:00:00')
//     const [endCounter, setEndCounter] = useState('')
//     const auth = useAuth()
//     //
    // const startCounterHandler = async () => {
    //     // const startData = moment().format('MMMM Do YYYY, h:mm:ss')
    //     const startData = new Date()
    //     await authFetch('http://localhost:5000/api/startTime', {
    //         method: 'POST',
    //     }, 'post', {startData})
    //         .then(r => console.log(r))
    //         .catch(e => console.log(e))
    //     setStartCounter(startData)
    // }
    // const endCounterHandler = async () => {
    //     // const endData = moment().format('MMMM Do YYYY, h:mm:ss')
    //     const endData = new Date()
    //     await authFetch('http://localhost:5000/api/endTime', {
    //         method: 'POST',
    //     }, 'post', {endData})
    //         .then(r => console.log(r))
    //         .catch(e => console.log(e))
    //     console.log('end', endData)
    //     setStartCounter('')
    //     setEndCounter(endData)
    // }
    //
    //
    // useEffect(() => {
    //     const findStartDate = async () => {
    //         await authFetch('http://localhost:5000/api/refreshStart', {
    //             method: 'GET'
    //         }, 'get')
    //             .then(res => {
    //                 if (res.data.unRegister !== false){
    //                     console.log('refresh Start 1')
    //                     if (res.data.unSession) {
    //                         const startTime = moment(res.data.unSession.startTime)
    //                         setStartCounter(startTime)
    //                     }
    //                     if (res.data.adminRole) {
    //                         console.log('admin Role', res.data.adminRole)
    //                         const adminRole = res.data.adminRole
    //                         auth.adminStatusHandler(adminRole)
    //                     }
    //                 } else {
    //                     auth.authHandler(res.data.unRegister)
    //                 }
    //
    //             })
    //             .catch(e => console.log(e))
    //     }
    //     findStartDate()
    // }, [auth])
    //
    // useEffect(() => {
    //     if (startCounter === '') {
    //         setCurrentCounter(SecondToDate(0))
    //         return
    //     }
    //     const data = new Date()
    //     const counter = data - startCounter
    //     console.log(counter)
    //     const time = SecondToDate(counter)
    //     setCurrentCounter(time)
    // }, [setCurrentCounter, startCounter])
    //
    //
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (auth.auth) {
    //             authFetch('http://localhost:5000/api/refreshStart', {
    //                 method: 'GET'
    //             }, 'get')
    //                 .then(res => {
    //                     console.log('refresh start')
    //                     if (res.data.unSession) {
    //                         // console.log('res.data.unSession', res.data.unSession)
    //                         const startTime = moment(res.data.unSession.startTime)
    //                         setStartCounter(startTime)
    //                     } else {
    //                         // console.log('!res.data.unSession')
    //                         if (startCounter !== "") setStartCounter("")
    //                     }
    //                 })
    //                 .catch(e => console.log(e))
    //         } else {
//     //             return () => clearInterval(interval)
//     //         }
//     //     }, 1001)
//     //     return () => clearInterval(interval)
//     // }, [auth.auth, startCounter])
//
    return (
        <CounterProvider.Provider value={{
            // currentCounter,
            // startCounter,
            // startCounterHandler,
            // endCounterHandler
        }}>
            {children}
        </CounterProvider.Provider>
    );
};

export default CounterContext;