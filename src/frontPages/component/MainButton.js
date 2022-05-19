import React from 'react';
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  box-sizing: border-box;
  padding: 2rem;
  margin: 1rem 2rem;
  font-size: 4rem;
  font-weight: var(--font-weight-8);
  border-radius: 1rem;
  cursor: pointer !important; 
  height: 10rem;
  color: var(--gray-0);

  &.start {

    background: var(--green-4);
  }

  &.stop {
    background: var(--red-8);
  }
  
  :hover{
    filter: brightness(0.8);
  }
`



const MainButton = ({className, children, Counterscript}) => {

    return (
        <ButtonWrapper className={className} onClick={() => Counterscript()}>
            {children}
        </ButtonWrapper>
    );
};

export default MainButton;