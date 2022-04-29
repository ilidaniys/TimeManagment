import React from 'react';
import styled from 'styled-components';
import MenuButton from "../component/MenuButton";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {useAuth} from "../Context/authContext/AuthContext";
import {setAuthStatusCreator, setAuthTokenCreator} from "../store/authReducer/AuthReducer";
import {useDispatch, useSelector} from "react-redux";

const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

const LeftButton = styled.div`
  display: flex;
`
const RightButton = styled.div`
  gap: 2rem;
  display: flex;
`


const Menu = () => {
    // const auth = useAuth()
    const dispatch = useDispatch()
    const authStatus = useSelector(state => state.status)
    console.log('auth', authStatus)
    const navigate = useNavigate()


    const quite = () => {
        axios
            .get('http://localhost:5000/api/logout')
            .then((res) => {
                navigate('/login')
                dispatch(setAuthTokenCreator(''))
                dispatch(setAuthStatusCreator(res.data.auth))
                localStorage.clear()
                console.log(res.data)
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
                {authStatus
                    ? <MenuButton>
                        <NavLink to={'/adminPanel'}>Admin Panel </NavLink>
                    </MenuButton>
                    : null
                }
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