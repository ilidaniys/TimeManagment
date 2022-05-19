import React from 'react';
import styled from 'styled-components'

const SubmitButton = styled.button`
  height: 3rem;
  padding: .3rem 1.5rem;
  border: .2rem solid var(--green-5);
  background: var(--green-5);
  border-radius: .2rem;
  font-size: 1.3rem;
  font-weight: 600;

  :hover{
    filter: brightness(0.8);
    cursor: pointer;
  }
  
  :disabled{
    filter: brightness(1);
    background: var(--gray-9);
    border: .2rem solid var(--gray-8);
    color: var(--gray-3);
    cursor: inherit;
  }
 
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