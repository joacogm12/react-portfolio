import React from 'react'
import { AiFillPhone, AiFillMail, AiFillGithub } from 'react-icons/ai'
import './ContactInfo.css'

export default function ContactInfo() {
    return (
        <>
            <div className='info-container'>
                <div className='info'>
                    <div><AiFillPhone /></div>
                    <p>+52 444 580 8026</p>
                </div>
                <div className='info'>
                    <div><AiFillMail /></div>
                    <p>gomezjoaquin991@gmail.com</p>
                </div>
                <div className='info'>
                    <div><AiFillGithub /></div>
                    <p>joacogm12</p>
                </div>
            </div>
        </>
    )
}
