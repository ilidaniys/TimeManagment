import React from 'react';
import styled from 'styled-components'
import Menu from "../Header/Menu";

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--header-color);
`
const HeaderContentWrapper = styled.header`
  height: 100%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContentWrapper>
                <Menu/>
            </HeaderContentWrapper>
        </HeaderWrapper>
    );
};

export default Header;