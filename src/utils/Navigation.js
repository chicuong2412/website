import React, { useContext } from 'react'
import { useLogin } from '../context/LoginProvider'
import { LayoutLogged , Layouts} from '../layouts/Layouts'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BookingPage from '../pages/BookingPage';
import LoginPage from '../pages/LoginPage';
import AppointmentHistory from '../component/Appointment/AppointmentHistory';

function RoutePagesLogged() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutLogged><Home /></LayoutLogged>} />
                <Route path="booking/*" element={<LayoutLogged><BookingPage /></LayoutLogged>} />
                <Route path="appointments/*" element={<LayoutLogged><AppointmentHistory /></LayoutLogged>} />
            </Routes>
        </BrowserRouter>
    )
}

function RoutePagesUnLogged() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layouts><Home /></Layouts>} />
                <Route path="booking/*" element={<Layouts>Please Login</Layouts>} />
                <Route path="login/*" element={<Layouts><LoginPage></LoginPage></Layouts>} />
            </Routes>
        </BrowserRouter>
    )
}


export default function MainNavigation() {
    const { isLogged } = useLogin()
    return (isLogged) ? RoutePagesLogged():RoutePagesUnLogged()
}
