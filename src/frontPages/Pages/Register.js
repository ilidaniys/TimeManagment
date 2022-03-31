import React from 'react';
import styled from 'styled-components'
import InputRegister from "../component/RegisterComponent/InputRegister";

const RegisnterWrapper = styled.div`
  height: 30rem;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  background: var(--registr-button-color);
  margin-top: 5rem;

`

const RegisterConteiner = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2rem;
`

const Register = () => {
    return (
        <RegisnterWrapper>
            <RegisterConteiner>
                <InputRegister>
                    User Name
                </InputRegister>
                <InputRegister>
                    Email
                </InputRegister>
                <InputRegister>
                    Password
                </InputRegister>
                <InputRegister>
                    Confirm Password
                </InputRegister>
            </RegisterConteiner>
        </RegisnterWrapper>
    );
};

export default Register;