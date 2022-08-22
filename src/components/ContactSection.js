import React, { useState } from 'react'

export default function ContactSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <>
            <div className='from-container'>
                <div className="form-group">
                    <label htmlFor="name">
                        Your Name
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="name"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Your Email
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="message">
                        Your message
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="message"
                        />
                    </label>
                </div>
                <button type="submit">Send</button>
            </div>
        </>
    );
}
