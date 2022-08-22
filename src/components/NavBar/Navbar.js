import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
    return (
        <>
            <div className='nav'>
                <a href='/'>Home</a>
                <a href='/About'>About</a>
                <a href='/Portfolio'>Portfolio</a>
                <a href='/Skills'>Skills</a>
                <a href='/Contact'>Contact</a>
            </div>
        </>
    )
}

export default Navbar