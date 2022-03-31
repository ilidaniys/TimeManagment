import React from 'react';
import styled from 'styled-components'

const InputWrapper = styled.div`
  box-sizing: border-box;
  margin-top: 1rem;
  width: 80%;
  height: 3rem;

`
const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: .1rem solid var(--stop-button-color);
  outline: none;
  font-size: 1.2rem;
  font-weight: 600;
  
  ::placeholder{
    
    color: var(--stop-button-color-60);
  }
  :focus{
    border: .15rem solid var(--stop-button-color);
  }
  :focus::placeholder{
    color: var(--stop-button-color);
  }
  
`


const InputRegister = ({children}) => {
    return (
        <InputWrapper>
            <Input placeholder = {children}/>
        </InputWrapper>
    );
};

export default InputRegister;