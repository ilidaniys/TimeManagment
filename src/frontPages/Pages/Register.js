import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import InputRegister from "../component/RegisterComponent/InputRegister";
import SubmitRegister from "../component/RegisterComponent/SubmitRegister";
import LinkSingup from "../component/RegisterComponent/LinkSingup";
import {
    RegisnterWrapper,
    RegisterConteiner,
    SubmitBlock
} from "../component/RegisterComponent/RegisterWrapper/Register Wrapper";

const userRegex = /^[a-zA-Z\-]{3,24}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Register = (props) => {

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMassage, setErrMassage] = useState('')
    const [success, setSuccess] = useState(false)


    useEffect(() =>{
        const result = userRegex.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() =>{
        const result = emailRegex.test(email)
        console.log(result)
        console.log(email)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = passwordRegex.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd()
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMassage('')
    }, [user, email, pwd, matchPwd])


    return (
        <RegisnterWrapper height={'30rem'}>
            <RegisterConteiner>
                <InputRegister
                    useRef={userRef}
                    autoComplete={'off'}
                    required={'true'}
                    setState={setUser}
                    ariaInvalid={validName ? 'false' : 'true'}
                    ariaDesribedby={'uidnote'}
                    onFocus={() => setUserFocus(true)}
                    focus={userFocus}
                    state={user}
                    validState={validName}
                >
                    User Name
                </InputRegister>
                <InputRegister>
                    Email
                </InputRegister>
                <InputRegister>
                    Password
                </InputRegister>
                <InputRegister>
                    Confirm Password
                </InputRegister>
                <SubmitBlock>
                    <LinkSingup
                    tittle={'Already Register?'}
                    text={'Sign In!'}
                    />
                    <SubmitRegister/>
                </SubmitBlock>
            </RegisterConteiner>
        </RegisnterWrapper>
    );
};

export default Register;