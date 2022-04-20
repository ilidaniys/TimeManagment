import React from 'react';
import styled from 'styled-components'

const LauoutWrapper = styled.div`
  //z-index: 1;
  height: auto;
  top: var(--header-height);
  //min-height: var(--main-height);
  position: relative;
  //background: var(--main-color);

`
const ContentWrapper = styled.div`

  //background: aqua;
  //width: 80%;
  display: flex;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
  //top: var(--header-height)

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