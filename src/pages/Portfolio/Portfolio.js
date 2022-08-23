import React from 'react'
import planner from '../../assets/daily-planner.png'
import weather from '../../assets/weather-app.png'
import myTeam from '../../assets/my-team.png'
import reameGen from '../../assets/readme-gen.png'
import quiz from '../../assets/quiz.png'
import passwordGen from '../../assets/fotoPasswordGenerator.png'


import './Portfolio.css'

export function Portfolio() {
    return (
        <>
            <div className='portfolio-container'>
                <div className='portfolio'>
                    <h1>Portfolio</h1>
                    <div className='img-container'>
                        <a href='https://github.com/joacogm12/daily-planner'><img alt='foto' src={planner} /></a>
                        <a href='https://github.com/joacogm12/weather-app'><img alt='foto' src={weather} /></a>
                        <a href='https://github.com/joacogm12/quiz'><img alt='foto' src={quiz} /></a>
                        <a href='https://github.com/joacogm12/Readme-Gen'><img alt='foto' src={reameGen} /></a>
                        <a href='https://github.com/joacogm12/my-team'><img alt='foto' src={myTeam} /></a>
                        <a href='https://github.com/joacogm12/password-generator'><img alt='foto' src={passwordGen} /></a>
                    </div>
                    <h2>visit GitHub for more</h2>
                </div>
            </div>
        </>
    )
}

export default Portfolio