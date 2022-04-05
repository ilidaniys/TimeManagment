import React from 'react';
import styled from 'styled-components';
import MenuButton from "../component/MenuButton";
import {NavLink} from "react-router-dom";

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
                <MenuButton>
                    <NavLink to={'/'}> Home</NavLink>
                </MenuButton>
            </LeftButton>
            <RightButton>
                <MenuButton>
                    <NavLink to={'/adminPanel'}>Admin Panel </NavLink>
                </MenuButton>
                <MenuButton>
                    <NavLink to={'/profile'}>Profile</NavLink>
                    </MenuButton>
            </RightButton>
        </MenuWrapper>
    );
};

export default Menu;