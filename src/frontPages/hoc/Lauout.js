import React from 'react';
import styled from 'styled-components'

const LauoutWrapper = styled.div`

  height: var(--main-height);
  top: var(--header-height);
  //display: flex;
  //justify-content: center;
  //align-items: center;
  position: relative;

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