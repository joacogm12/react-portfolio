import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import './Contact.css'

export default function Contact() {

    return (
        <>
            <div className='contact-container'>
                <div className='contact-me'>
                    <h1>Contact</h1>
                    <div className='info-form'>
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}

