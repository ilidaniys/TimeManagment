import React from 'react';
import styled from "styled-components";

const RegisterHocWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //position: relative;
  //margin: 0;
  //overflow-x: hidden;
  //overflow-y: hidden;
`

const RegisterHoc = ({children}) => {
    return (
        <RegisterHocWrapper>
            {children}
        </RegisterHocWrapper>
    );
};

export default RegisterHoc;