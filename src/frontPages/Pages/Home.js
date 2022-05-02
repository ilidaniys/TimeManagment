import React, {useEffect} from 'react';
import styled from 'styled-components'
import MainButton from "../component/MainButton";
import {useCounter} from "../Context/CounterContext/CounterContext";
import {SecondToDate} from "../component/CounterLogic/CounterFunction";

import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {
    counterReducer,
    currentCounterCreator, setEndCounterCreator,
    setStartCounterCreator,
    startCounterCreator
} from "../store/counterReducer/CounterReducer";
import {profileReducer} from "../store/profileReducer/ProfileReducer";
import {authReducer} from "../store/authReducer/AuthReducer";
import {authFetch} from "../../utility/authFetch";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  margin: 5rem 0;
  height: 100%;
`
const HomeConteiner = styled.div`
  position: relative;
  display: grid;
  box-sizing: border-box;
  z-index: 1;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  padding: 2rem;


  > p {
    grid-row: 1;
    grid-column: 1/ span 2;
    text-align: center;
    font-size: 8rem;
    user-select: none;
    color: var(--gray-0);
  }
`


const Home = () => {
    const counter = useCounter()
    const auth = useSelector(state => state.authReducer.status)
    const startCounter = useSelector(state => state.counterReducer.startCounter)
    const currentCounter = useSelector(state => state.counterReducer.currentCounter)
    const dispatch = useDispatch()
    console.log('startCounter', startCounter)

    useEffect(() => {
        if (startCounter === '') {
            dispatch(startCounterCreator(SecondToDate(0)))
            return
        }
        const data = new Date()
        const counter = data - startCounter
        console.log(counter)
        const time = SecondToDate(counter)
        dispatch(currentCounterCreator(time))
    }, [startCounter])

    useEffect(() => {
        const interval = setInterval(() => {
            if (auth !== '') {
                authFetch('http://localhost:5000/api/refreshStart', {
                    method: 'GET'
                }, 'get')
                    .then(res => {
                        console.log('refresh start')
                        if (res.data.unSession) {
                            // console.log('res.data.unSession', res.data.unSession)
                            const startTime = moment(res.data.unSession.startTime)
                            dispatch(startCounterCreator(startTime))
                        } else {
                            // console.log('!res.data.unSession')
                            if (startCounter !== '') dispatch(startCounterCreator(""))
                        }
                    })
                    .catch(e => console.log(e))
            } else {
                return () => clearInterval(interval)
            }
        }, 1001)
        return () => clearInterval(interval)
    }, [auth, startCounter])


    function dispatchStartCounterHandler () {
        dispatch(setStartCounterCreator())
    }
    function dispatchEndCounterHandler () {
        dispatch(setEndCounterCreator())
    }


    return (
        <HomeWrapper>
            <HomeConteiner>
                <p>Your time: {`${currentCounter}`}</p>

                {(counter.startCounter === '')
                    ? <MainButton
                        className={'start'}
                        Counterscript={dispatchStartCounterHandler}
                    >
                        Start</MainButton>
                    : <MainButton
                        className={'stop'}
                        Counterscript={counter.endCounterHandler}
                    >
                        End</MainButton>
                }
            </HomeConteiner>
        </HomeWrapper>
    );
};

export default Home;