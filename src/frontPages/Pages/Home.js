import React, {useEffect} from 'react';
import styled from 'styled-components'
import MainButton from "../component/MainButton";
import {SecondToDate} from "../component/CounterLogic/CounterFunction";

import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {
    currentCounterCreator, setEndCounterCreator,
    setStartCounterCreator,
    startCounterCreator
} from "../store/counterReducer/CounterReducer";
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

    const auth = useSelector(state => state.authReducer.status)
    const startCounter = useSelector(state => state.counterReducer.startCounter)
    const currentCounter = useSelector(state => state.counterReducer.currentCounter)
    const dispatch = useDispatch()

    useEffect(() => {
        if (startCounter === 0) {
            dispatch(currentCounterCreator(SecondToDate(0)))
            return
        }
        const data = new Date()
        const counter = data - startCounter
        // console.log('counter', counter)
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
                        if (res.data.unSession) {
                            const startTime = moment(res.data.unSession.startTime)
                            dispatch(startCounterCreator(startTime))
                        } else {
                            if (startCounter !== 0) dispatch(currentCounterCreator(SecondToDate(0)))
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
                {(startCounter === 0)
                    ? <MainButton
                        className={'start'}
                        Counterscript={dispatchStartCounterHandler}
                    >
                        Start</MainButton>
                    : <MainButton
                        className={'stop'}
                        Counterscript={dispatchEndCounterHandler}
                    >
                        End</MainButton>
                }
            </HomeConteiner>
        </HomeWrapper>
    );
};

export default Home;