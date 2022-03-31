import React from 'react';
import styled from 'styled-components'

const SubmitButton = styled.button`
  height: 3rem;
  width: 8rem;
  //margin-right: 5rem;
  border: .2rem solid ;
  background: var(--stop-button-color);
  cursor: pointer;
  font-size: 1.2rem;
  
  :hover{
    filter: brightness(0.8);
  }
`

const SubmitRegister = () => {
    return (
        <SubmitButton>
            Confirm
        </SubmitButton>
    );
};

export default SubmitRegister;