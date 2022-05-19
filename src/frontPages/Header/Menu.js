import React from 'react';
import styled from 'styled-components';
import MenuButton from "../component/MenuButton";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {setAuthStatusCreator, setAuthTokenCreator} from "../store/authReducer/AuthReducer";
import {useDispatch, useSelector} from "react-redux";
import {URLI} from "../../App";

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
    const dispatch = useDispatch()
    const authStatus = useSelector(state => state.authReducer.status)
    const adminStatus = useSelector(state => state.authReducer.adminStatus)
    console.log('auth', authStatus)
    const navigate = useNavigate()


    const quite = () => {
        axios
            .get(`${URLI}/api/logout`)
            .then((res) => {
                navigate('/login')
                dispatch(setAuthTokenCreator(''))
                dispatch(setAuthStatusCreator(false))
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
                {adminStatus
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