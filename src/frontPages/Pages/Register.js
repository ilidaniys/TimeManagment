import React from 'react';
import styled from 'styled-components'
import InputRegister from "../component/RegisterComponent/InputRegister";
import SubmitRegister from "../component/RegisterComponent/SubmitRegister";
import LinkSingup from "../component/RegisterComponent/LinkSingup";

export const RegisnterWrapper = styled.div`
  height: ${props => props.height || '10rem'};
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  background: var(--registr-button-color);
  margin-top: 5rem;

`

export const RegisterConteiner = styled.form`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`
export const SubmitBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`

const Register = (props) => {
    return (
        <RegisnterWrapper height={'30rem'}>
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
                <SubmitBlock>
                    <LinkSingup
                    tittle={'Already Register?'}
                    text={'Sign In!'}
                    />
                    <SubmitRegister/>
                </SubmitBlock>
            </RegisterConteiner>
        </RegisnterWrapper>
    );
};

export default Register;