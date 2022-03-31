import React from 'react';
import styled from 'styled-components'

const InputWrapper = styled.div`
  position: relative;
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

  ::placeholder {
    color: var(--stop-button-color-60);
  }

  :focus {
    border: .15rem solid var(--stop-button-color);
  }

  :focus::placeholder { 
    color: var(--stop-button-color);
  }
`

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  left: 1.2rem;
  top: .6rem;
  position: absolute;
  color: #d81159;
  pointer-events: none;
  transition: transform .1s cubic-bezier(.9, 0, .1, 1);

  Input:focus ~ Text{
    transform: translate(-1.5rem, -3rem)
  }
  Input:not(:placeholder-shown) ~ Text {
    transform: translate(-1.5rem, -3rem)
  }
`


const InputRegister = ({children}) => {
    return (
        <InputWrapper>
            <Input/>
            <Text>{children}</Text>
        </InputWrapper>
    );
};

export default InputRegister;