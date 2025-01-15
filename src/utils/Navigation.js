import React, { useContext } from 'react'
import { useLogin } from '../context/LoginProvider'
import { LayoutLogged , Layouts} from '../layouts/Layouts'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import BookingPage from '../pages/BookingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AppointmentHistory from '../component/Appointment/AppointmentHistory';
import ProfilePage from '../pages/ProfilePage';
import NoPage from '../pages/NoPage';

function RoutePagesLogged() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutLogged><Home /></LayoutLogged>} />
                <Route path="booking/*" element={<LayoutLogged><BookingPage /></LayoutLogged>} />
                <Route path="appointments/*" element={<LayoutLogged><AppointmentHistory /></LayoutLogged>} />
                <Route path='profile/*' element={<LayoutLogged><ProfilePage></ProfilePage></LayoutLogged>}></Route>
                <Route path='*' element={<LayoutLogged><NoPage></NoPage></LayoutLogged>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

function RoutePagesUnLogged() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layouts><Home /></Layouts>} />
                <Route path="login/*" element={<Layouts><LoginPage></LoginPage></Layouts>} />
                <Route path="register/*" element={<Layouts><RegisterPage></RegisterPage></Layouts>} />
                <Route path="*" element={<Navigate to={"/login"}></Navigate>} />
            </Routes>
        </BrowserRouter>
    )
}


export default function MainNavigation() {
    const { isLogged } = useLogin()
    return (isLogged) ? RoutePagesLogged():RoutePagesUnLogged()
}
