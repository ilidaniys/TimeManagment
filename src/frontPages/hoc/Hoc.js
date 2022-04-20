import React from 'react';
import styled from "styled-components";

const HocWrapper = styled.main`
  width: 100vw;
  min-height: 100vh;
  background: var(--gradient-23);
  position: relative;
  margin: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  
`

const Hoc = ({children}) => {
    return (
        <HocWrapper>
            {children}
        </HocWrapper>
    );
};

export default Hoc;