import React from 'react';
import styled from "styled-components";

const HocWrapper = styled.main`
  width: 100vw;
  min-height: 100vh;
  background: #463F3A;
  position: relative;
  margin: 0;
  
`

const Hoc = ({children}) => {
    return (
        <HocWrapper>
            {children}
        </HocWrapper>
    );
};

export default Hoc;