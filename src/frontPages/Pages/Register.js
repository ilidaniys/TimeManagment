import React, {useEffect, useRef, useState} from 'react';
import InputRegister from "../component/RegisterComponent/InputRegister";
import SubmitRegister from "../component/RegisterComponent/SubmitRegister";
import LinkSingup from "../component/RegisterComponent/LinkSingup";
import {
    RegisterConteiner, RegisterWrapper,
    SubmitBlock
} from "../component/RegisterComponent/RegisterWrapper/Register Wrapper";
import SuccessMassage from "../component/RegisterComponent/SuccessMassage";
import axios from "axios";
import RegisterHoc from "../hoc/RegisterHoc";
import {URLI} from "../../App";

const userRegex = /^[a-zA-Z\-]{4,24}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Register = () => {

    const userRef = useRef()

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

    const [errMassage, setErrMassage] = useState(false)
    const [success, setSuccess] = useState(false)


    useEffect(() => {
        const result = userRegex.test(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = emailRegex.test(email)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = passwordRegex.test(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMassage('')
    }, [user, email, pwd, matchPwd])


    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post(`${URLI}/api/register`, {
                name: user,
                email,
                password: pwd,
                repeat: matchPwd
            })
            .then((res) => {
                console.log(res.data)
                setSuccess(res.data.newCandidate)
                setErrMassage(res.data.errMassage)
            })
            .catch((e) => {
                console.log(e)
            })

    }

    return (
        <RegisterHoc>
            <RegisterWrapper height={'40rem'}>
                {success
                    ? <SuccessMassage/>
                    : <RegisterConteiner onSubmit={handleSubmit}>
                        {errMassage
                            ? <p> incorrect email, or already used </p>
                            : null}
                        <InputRegister
                            type={'text'}
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
                            minnumber={'4 to 24 symbols'}
                            text={'only letters'}
                        >
                            User Name
                        </InputRegister>
                        <InputRegister
                            type={'text'}
                            autoComplete={'off'}
                            required={'true'}
                            setState={setEmail}
                            ariaInvalid={validEmail ? 'false' : 'true'}
                            ariaDesribedby={'eidnote'}
                            onFocus={() => setEmailFocus(true)}
                            focus={emailFocus}
                            state={email}
                            validState={validEmail}
                            minnumber={''}
                            text={'only email requare!'}
                        >
                            Email
                        </InputRegister>
                        <InputRegister
                            type={'password'}
                            autoComplete={'off'}
                            required={'true'}
                            setState={setPwd}
                            ariaInvalid={validPwd ? 'false' : 'true'}
                            ariaDesribedby={'pidnote'}
                            onFocus={() => setPwdFocus(true)}
                            focus={pwdFocus}
                            // state={pwd}
                            additionalState={pwd}
                            validState={validPwd}
                            minnumber={'8 to 24 symbols'}
                            text={'you should use at least one Capital letter, one symbols and one numbers'}
                        >
                            Password
                        </InputRegister>
                        <InputRegister
                            type={'password'}
                            autoComplete={'off'}
                            required={'true'}
                            setState={setMatchPwd}
                            ariaInvalid={validMatch ? 'false' : 'true'}
                            ariaDesribedby={'matchnote'}
                            onFocus={() => setMatchFocus(true)}
                            focus={matchFocus}
                            state={matchPwd}
                            additionalState={matchPwd}
                            validState={validMatch}
                            minnumber={'As in password!'}
                            text={'password should match!'}
                        >
                            Confirm Password
                        </InputRegister>
                        <SubmitBlock>
                            <LinkSingup
                                tittle={'Already Register?'}
                                text={'Sign In!'}
                                path={'/login'}
                            />
                            <SubmitRegister
                                validName={validName}
                                validEmail={validEmail}
                                validPwd={validPwd}
                                validMatch={validMatch}
                            />
                        </SubmitBlock>
                    </RegisterConteiner>
                }
            </RegisterWrapper>
        </RegisterHoc>
    );
};

export default Register;