import React, {useEffect, useState} from 'react';
import LinkSingup from "../component/RegisterComponent/LinkSingup";
import SubmitRegister from "../component/RegisterComponent/SubmitRegister";
import {
    RegisterConteiner, RegisterWrapper,
    SubmitBlock
} from "../component/RegisterComponent/RegisterWrapper/Register Wrapper";
import InputLogin from "../component/RegisterComponent/InputLogin";
import {useAuth} from "../Context/authContext/AuthContext";

const LogIn = () => {

    const auth = useAuth()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [errMassage, setErrMassage] = useState('')
    const [success, setSuccess] = useState(false)


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

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <RegisterWrapper height={'25rem'}>
            <RegisterConteiner>
                <InputLogin
                    type={'text'}
                    autoComplete={'off'}
                    required={'true'}
                    setState={setUser}
                    onFocus={() => setUserFocus(true)}
                    focus={userFocus}
                    state={user}
                >
                    User Name
                </InputLogin>
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
                        tittle={'Not yet registered??'}
                        text={'Register!'}
                    />
                    <SubmitRegister
                        validName={validName}
                        validEmail={validEmail}
                        validPwd={validPwd}
                        validMatch={'true'}
                    />
                </SubmitBlock>
            </RegisterConteiner>
        </RegisterWrapper>
    );
};

export default LogIn;