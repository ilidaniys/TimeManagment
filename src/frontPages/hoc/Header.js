import React from 'react';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--header-color);
`
const HeaderContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  
`

const Header = (props) => {
    return (
        <HeaderWrapper>
            <HeaderContentWrapper>
                {props.children}
            </HeaderContentWrapper>
        </HeaderWrapper>
    );
};

export default Header;