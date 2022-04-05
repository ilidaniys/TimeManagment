import React from 'react';
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  box-sizing: border-box;
  padding: 2rem;
  margin: 1rem 2rem;
  font-size: 2rem;
  font-weight: 600;
  border-radius: 1rem;
  cursor: pointer !important; 
  height: 10rem;
  
  &.start {
    border: .2rem solid #adeee3;
    background: var(--start-button-color);
  }

  &.stop {
    border: .2rem solid ;
    background: var(--stop-button-color);
  }
  
  :hover{
    filter: brightness(0.8);
  }
`



const MainButton = ({className, children, Counterscript}) => {

    // function buttonFunction () {
    //     buttonHandler()
    //     Counterscript()
    // }

    return (
        <ButtonWrapper className={className} onClick={() => Counterscript()}>
            {children}
        </ButtonWrapper>
    );
};

export default MainButton;