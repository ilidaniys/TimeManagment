import React from 'react';
import styled from 'styled-components'
import MainButton from "../component/MainButton";
import {useCounter} from "../Context/CounterContext/CounterContext";

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


    return (
        <HomeWrapper>
            <HomeConteiner>
                <p>Your time: {`${counter.currentCounter}`}</p>

                {(counter.startCounter === '')
                    ? <MainButton
                        className={'start'}
                        Counterscript={counter.startCounterHandler}
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