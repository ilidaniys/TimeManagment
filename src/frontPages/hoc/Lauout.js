import React from 'react';
import styled from 'styled-components'

const LauoutWrapper = styled.div`
  z-index: -100;
  width: 100vw;
  margin-top: var(--header-height);
  height: var(--main-height);
  position: relative;
  background: var(--main-color);
`
const ContentWrapper = styled.main`
  //background: aqua;
  width: 80%;
  height: inherit;
  margin-left: auto;
  margin-right: auto;
  
`


const Lauout = (props) => {
    return (
        <LauoutWrapper>
            <ContentWrapper>
                {props.children}
            </ContentWrapper>
        </LauoutWrapper>
    );
};

export default Lauout;