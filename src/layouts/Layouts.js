import React from 'react'
import Menu from './NavMenu/Menu'
import Footer from './Footers/Footer'
import Wrapper from '../component/Wrapper/Wrapper'
import MenuInLog from './NavMenu/MenuInLog'

export function Layouts({ children }) {
    return (
        <Wrapper>
            <Menu/>
            {children}
            <Footer/>
        </Wrapper>

    )
}

export function LayoutLogged({ children }) {
    return (
        <Wrapper>
            <MenuInLog/>
            {children}
            <Footer/>
        </Wrapper>

    )
}
