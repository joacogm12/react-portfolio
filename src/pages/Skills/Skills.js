import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { IconContext } from 'react-icons'

import './Skills.css'

export function Skills() {
    return (
        <>
            <div className='skills-container' >
                <div className='table-skill'>
                    <h1>Skills</h1>
                    <IconContext.Provider value={{ color: "white", size: "50px" }}>
                        <div className='table'>
                            <h2><AiFillHtml5 /></h2>
                            <div className='goal'>
                                <div className='html progress'>
                                    <div className='reflection' />
                                </div>
                            </div>
                            <h2><IoLogoCss3 /></h2>
                            <div className='goal'>
                                <div className='css progress'>
                                    <div className='reflection' />
                                </div>
                            </div>
                            <h2><IoLogoJavascript /></h2>
                            <div className='goal'>
                                <div className='javascript progress'>
                                    <div className='reflection' />
                                </div>
                            </div>
                            <h2><GrReactjs /></h2>
                            <div className='goal'>
                                <div className='react progress'>
                                    <div className='reflection' />
                                </div>
                            </div>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}

export default Skills