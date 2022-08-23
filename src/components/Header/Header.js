import React from 'react'
import resume from '../../assets/CV_Joaquin_Gomez.pdf'
import './Header.css'

export default function Header() {
    return (
        <>
            <header>
                <a target='_blank' href={resume}>Download Resume</a>
                <br />
                JoacoTaco
            </header>
        </>
    )
}
