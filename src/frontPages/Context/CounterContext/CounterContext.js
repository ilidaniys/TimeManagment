import React, {createContext, useContext, useEffect, useState} from 'react';
import {SecondToDate} from "../../component/CounterLogic/CounterFunction";
import {authFetch} from "../authContext/createAuthProvider";
import moment from "moment";


const CounterProvider = createContext()

export const useCounter = () => {
    return useContext(CounterProvider)
}

const CounterContext = ({children}) => {

    const [startCounter, setStartCounter] = useState('')
    const [currentCounter, setCurrentCounter] = useState('00:00:00')
    const [endCounter, setEndCounter] = useState('')

    const startCounterHandler = async () => {
        // const startData = moment().format('MMMM Do YYYY, h:mm:ss')
        const startData = new Date()
        console.log('start', startData)
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
                    console.log(res.data)
                    if (res.data.startTime) {
                        const startTime = moment(res.data.startTime)
                        setStartCounter(startTime)
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
            const data = new Date()
            // console.log(typeof data)
            // console.log('second',second)
            const counter = data - startCounter
            const time = SecondToDate(counter)

            console.log(time)
            console.log(counter)
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