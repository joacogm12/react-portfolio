import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import './Home.css'

export function Header() {
    return (
        <>
            <div className='home'>
                <div className='container'>
                    <div className='blue' />
                    <h1>Hello<span className='animated'>.</span><br /> I am  <br />Joaquin</h1>
                </div>

            </div>
        </>
    )
}

export default Header