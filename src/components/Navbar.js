import React from 'react';
import {Nav, NavLink, Bars, NavMenu } from './NavbarElems';

function Navbars () {
    return (
    <>
        <Nav>
            <NavLink to='/'>
                Home
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/about' activeStyle>
                    About Me
                </NavLink>
                <NavLink to='/courses' activeStyle>
                    Courses
                </NavLink>
                <NavLink to='/ecs' activeStyle>
                    Extracurriculars
                </NavLink>
                <NavLink to='/proj' activeStyle>
                    Projects
                </NavLink>
            </NavMenu>
        </Nav>
    </>
    )
}

export default Navbars;