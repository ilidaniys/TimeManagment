import React, {useState} from 'react';
import styled from 'styled-components'
import MainButton from "../component/MainButton";
import DataCounter from "../component/DataCounter";


const HomeWrapper = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`
const HomeConteiner = styled.div`
  display: grid;
  z-index: 1;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 10rem;
  width: 100%;
  max-height: 20rem;
  border: .1rem solid #B9BCD0;
`



const Home = () => {

    const [buttonStatus, setButtonStatus] = useState(true);
    const buttonChanger = () => {
        setButtonStatus(!buttonStatus)
        console.log(buttonStatus)
    }

    return (
        <HomeWrapper>
            <HomeConteiner>
                <DataCounter gridRow={'1'} gridColumn={'1/ span 2'} />
                <MainButton className={'start'} ButtonHandler={buttonChanger}> Start</MainButton>
                <MainButton className={'stop'} ButtonHandler={buttonChanger}> End</MainButton>
            </HomeConteiner>
        </HomeWrapper>
    );
};

export default Home;