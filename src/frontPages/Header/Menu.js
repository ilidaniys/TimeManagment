import React from 'react';
import styled from 'styled-components';
import MenuButton from "../component/MenuButton";
import {NavLink} from "react-router-dom";
import {useNavigate} from 'react-router';
import axios from "axios";
import {useAuth} from "../Context/authContext/AuthContext";

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
    const auth = useAuth()
    const navigate = useNavigate()


    const quite = () => {
        axios
            .get('http://localhost:5000/api/logout')
            .then( (res) => {
                auth.authhandler(res.data.auth)
                navigate('/login')
            })
            .catch((e) => {
                console.log(e)
            })
    }

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
                <MenuButton
                    onclick={() => quite()}
                >
                    Quit
                </MenuButton>
            </RightButton>
        </MenuWrapper>
    );
};

export default Menu;