import React from 'react';
import styled from 'styled-components'

const SubmitButton = styled.button`
  height: 3rem;
  width: 8rem;
  //margin-right: 5rem;
  border: .2rem solid;
  background: var(--stop-button-color);

  font-size: 1.2rem;

  :hover{
    filter: brightness(0.8);
    cursor: pointer;
  }
  
  
  :disabled{
    filter: brightness(1);
    background: var(--disabled-color);
    cursor: inherit;
  }
  //:disabled :hover{
  //  background: #d81159;
  //}
  
`

const SubmitRegister = ({validMatch, validEmail, validName, validPwd}) => {
    return (
        <SubmitButton
            type="submit"
            disabled={!validEmail || !validMatch || !validPwd || !validName}
        >
            Confirm
        </SubmitButton>
    );
};

export default SubmitRegister;