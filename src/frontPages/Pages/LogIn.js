import React, {useEffect, useState} from 'react';
import LinkSingup from "../component/RegisterComponent/LinkSingup";
import SubmitRegister from "../component/RegisterComponent/SubmitRegister";
import {
    RegisterConteiner, RegisterWrapper,
    SubmitBlock
} from "../component/RegisterComponent/RegisterWrapper/Register Wrapper";
import InputLogin from "../component/RegisterComponent/InputLogin";
import axios from "axios";
import RegisterHoc from "../hoc/RegisterHoc";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAuthAdminStatusCreator, setAuthStatusCreator, setAuthTokenCreator} from "../store/authReducer/AuthReducer";

const LogIn = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    // const [userFocus, setUserFocus] = useState(false)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [errMassage, setErrMassage] = useState('')
    // const [success, setSuccess] = useState(false)


    useEffect(() => {
        if (user) {
            setValidName(true)

        } else {
            setValidName(false)
        }
    }, [user])
    useEffect(() => {
        if (email) {
            setValidEmail(true)

        } else {
            setValidEmail(false)
        }
    }, [email])
    useEffect(() => {
        if (pwd) {
            setValidPwd(true)
        } else {
            setValidPwd(false)
        }
    }, [pwd])
    useEffect(() => {
        setErrMassage('')
    }, [ email, pwd])

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post('http://localhost:5000/api/login', {
                email, pwd
            })
            .then((res) => {
                const err = res.data.errMassage
                if (!err) {
                    console.log(res.data.status)
                    dispatch(setAuthStatusCreator(res.data.status))
                    dispatch(setAuthAdminStatusCreator(res.data.adminStatus))
                    return res.data.accessToken
                }
                setErrMassage(err)
            })
            .then(token => {
                localStorage.setItem('TOKEN', token)
                dispatch(setAuthTokenCreator(token))
                navigate(`/`)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <RegisterHoc>
            <RegisterWrapper height={'25rem'}>
                <RegisterConteiner onSubmit={handleSubmit} autoComplete={'off'}>
                    {errMassage
                        ? <p> incorrect email, or already used </p>
                        : null}
                    <InputLogin
                        type={'text'}
                        autoComplete={'off'}
                        required={'true'}
                        setState={setEmail}
                        onFocus={() => setEmailFocus(true)}
                        focus={emailFocus}
                        state={email}
                    >
                        Email
                    </InputLogin>
                    <InputLogin
                        type={'password'}
                        autoComplete={'off'}
                        required={'true'}
                        setState={setPwd}
                        onFocus={() => setPwdFocus(true)}
                        focus={pwdFocus}
                        state={pwd}
                    >
                        Password
                    </InputLogin>
                    <SubmitBlock>
                        <LinkSingup
                            tittle={'Not yet registered?'}
                            text={'Register!'}
                            path={'/register'}
                        />
                        <SubmitRegister
                            validName={true}
                            validEmail={validEmail}
                            validPwd={validPwd}
                            validMatch={'true'}
                        />
                    </SubmitBlock>
                </RegisterConteiner>
            </RegisterWrapper>
        </RegisterHoc>
    );
};

export default LogIn;