import React from 'react'
import useFrom from 'react-hook-form'
import ContactSection from '../../components/ContactSection'
import './Contact.css'

export default function Contact() {

    return (
        <>
            <div className='contact-container'>
                <div className='contact-me'>
                    <h1>Contact</h1>
                    <ContactSection />
                </div>
            </div>
        </>
    )
}

