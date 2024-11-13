import React, { useEffect } from 'react'
import style from './css/MenuStyle.module.scss'
import $ from 'jquery'
import { useLogin } from '../../context/LoginProvider'
import { useNavigate } from 'react-router-dom'

export default function UserTab() {

    const {setIsLogged} = useLogin()
    const navigate = useNavigate()

    useEffect(() => {
        $(".signOut").on('click', function() {
            setIsLogged(false)
            localStorage.removeItem("username")
            navigate('/')
        })
    })

    return (
        <div className={style.userTab}>
            <a href='/appointments'>Appointment history</a>
            <p className='signOut'>Sign out</p>
        </div>
    )
}
