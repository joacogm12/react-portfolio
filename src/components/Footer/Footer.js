import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className='icons'>
                    <a href='https://github.com/joacogm12' target="_blank"><AiFillGithub /></a>
                    <a href='https://www.linkedin.com/in/joaquin-gomez-758185232/' target="_blank"><AiFillLinkedin /></a>
                </div>
                <h4>developed by JoacoTaco</h4>
            </footer>
        </>
    )
}
