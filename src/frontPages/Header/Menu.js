import React from 'react';
import styled from 'styled-components';
import MenuButton from "../component/MenuButton";

const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

const LeftButton = styled.div`
  display: flex;
`
const RightButton = styled.div`
  display: flex;
`

const Menu = () => {
    return (
        <MenuWrapper>
            <LeftButton>
                <MenuButton> Home </MenuButton>
                <MenuButton> Time Line </MenuButton>
            </LeftButton>
            <RightButton>
                {/*<MenuButton> Admin Panel </MenuButton>*/}
                <MenuButton> Login</MenuButton>
            </RightButton>
        </MenuWrapper>
    );
};

export default Menu;