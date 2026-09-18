import React from 'react'
import './SquareUp.css'
import '../../assets/styles/colors.css'
import '../../assets/styles/fonts.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const SquareUp = ({ title, description, className}) => {
return (
    <section className={`${className} bs-squareup`}>
        <img src="/img/backgrounds/waveToUp.png" alt="back wave" className='rtBackStart' />
        <div className='rtBackColorStart'></div>
        <div className='rtContentStart'>
            <div className="bs-square">
                <img src="/img/squareIcon.png" alt="{title}" />
            </div>
            <h2 className='rtH2'>{title}</h2>
            <p className='rtP'>{description}</p>
            <Link to="/Work">
                <Button
                    className="rtButtonStartProject"
                    width= "170px"
                    height= "63px"
                    fontSize={18}
                    borderRadius={8}
                    backgroundColor= "var(--green50)"
                    color= "var(--grey10)"
                    border= "var(--green50)"
                    name= "Start Project"
                />
            </Link>
            
        </div>
    </section>
)
}

export default SquareUp