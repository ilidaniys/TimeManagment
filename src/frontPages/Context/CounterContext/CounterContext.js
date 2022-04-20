import React, {createContext, useContext, useEffect, useState} from 'react';
import {SecondToDate} from "../../component/CounterLogic/CounterFunction";
import {authFetch} from "../authContext/createAuthProvider";
import moment from "moment";
import {useAuth} from "../authContext/AuthContext";


const CounterProvider = createContext()

export const useCounter = () => {
    return useContext(CounterProvider)
}

const CounterContext = ({children}) => {

    const [startCounter, setStartCounter] = useState('')
    const [currentCounter, setCurrentCounter] = useState('00:00:00')
    const [endCounter, setEndCounter] = useState('')
    const auth = useAuth()

    const startCounterHandler = async () => {
        // const startData = moment().format('MMMM Do YYYY, h:mm:ss')
        const startData = new Date()
        await authFetch('http://localhost:5000/api/startTime', {
            method: 'POST',
        }, 'post', {startData})
            .then(r => console.log(r))
            .catch(e => console.log(e))
        setStartCounter(startData)
    }
    const endCounterHandler = async () => {
        // const endData = moment().format('MMMM Do YYYY, h:mm:ss')
        const endData = new Date()
        await authFetch('http://localhost:5000/api/endTime', {
            method: 'POST',
        }, 'post', {endData})
            .then(r => console.log(r))
            .catch(e => console.log(e))
        console.log('end', endData)
        setStartCounter('')
        setEndCounter(endData)
    }


    useEffect(() => {
        const findStartDate = async () => {
            await authFetch('http://localhost:5000/api/refreshStart', {
                method: 'GET'
            }, 'get')
                .then(res => {
                    if (res.data.unSession) {
                        console.log('resdata',res.data)
                        // console.log(res.data.startTime)
                        const startTime = moment(res.data.unSession.startTime)
                        console.log('startTime', startTime)
                        setStartCounter(startTime)
                    }
                    if (res.data.adminRole){
                        const adminRole = res.data.adminRole
                        auth.adminStatusHandler(adminRole)
                    }
                    // setStartCounter(res.data)
                })
                .catch(e => console.log(e))
        }
        findStartDate()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (startCounter === '') {
                clearInterval(interval)
                return
            }
            // const data = moment().format('MMMM Do YYYY, h:mm:ss')
            // console.log(startCounter)
            const data = new Date()
            // console.log(data)
            const counter = data - startCounter
            console.log(counter)
            const time = SecondToDate(counter)
            // console.log(time)
            // console.log(counter)
            setCurrentCounter(time)
        }, 1000)

        return () => clearInterval(interval)
    }, [setCurrentCounter, startCounter])


    return (
        <CounterProvider.Provider value={{
            currentCounter,
            startCounter,
            startCounterHandler,
            endCounterHandler
        }}>
            {children}
        </CounterProvider.Provider>
    );
};

export default CounterContext;