import React from 'react'
import { Button } from './Button'

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Stay Home // Stay Safe</h1>
            <p>Do your part!</p>
            <div className='hero-btns'>
                <Button className='btns' 
                buttonStyle='btn-outline' 
                buttonSize='btn-large'>
                    Emergency!
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
