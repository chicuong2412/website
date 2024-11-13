import React, { useEffect, useState } from 'react'
import style from './Login.module.scss'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { loginChecking } from '../../services/AccountServices'
import { useLogin } from '../../context/LoginProvider'
import { useNavigate } from 'react-router-dom'
import $ from 'jquery'



export default function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const navigate = useNavigate()
    const { setIsLogged } = useLogin()

    const handleOnclickShowPassword = (event) => {
        setIsShowPassword(!isShowPassword)
    }

    const userLoginHandler = (event) => {
        console.log("username " + username)
        let check = loginChecking(username, password)
        if (!username || !password) return;
        setIsLogged(true)
        localStorage.setItem("username", username)
        navigate('/')
    }

    useEffect(() => {
        $("#username").on('change', function () {
            console.log($(this).val())
            setUsername($(this).val())
        })

        $("#password").on('change', function () {
            setPassword($(this).val())
        })
    }, [])

    return (
        <>
            <div className='headingPane'>
                <div className='siteName'>
                    LOGIN
                </div>
                <div className='breadcrumbBoard'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Login</li>
                    </ol>
                </div>
            </div>
            <div className={style.LoginContainer}>
                <div className={style.formInputs}>
                    <div className={style.inputGroup}>
                        <label for='username'>Username or Email</label>
                        <input id='username' className={style.usernameInput}></input>
                    </div>
                    <div className={style.inputGroup}>
                        <label for='password'>Password</label>
                        <input type={(isShowPassword) ? 'text' : 'password'} id='password' className={style.usernameInput}></input>
                        <span className={style.showPasswordIcon} onClick={(event) => handleOnclickShowPassword()}>
                            <FontAwesomeIcon icon={(isShowPassword) ? faEye : faEyeSlash}></FontAwesomeIcon>
                        </span>
                    </div>
                    <button onClick={(event) => userLoginHandler()} className={style.loginButton}>LOGIN</button>
                </div>
            </div>

        </>
    )
}
