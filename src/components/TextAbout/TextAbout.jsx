import TextBeforCard from '../TextBeforCard/TextBeforCard'
import './TextAbout.css'

export default function TextAbout() {
    return (
        <section className='rtTextAndImgAbout'>
            <TextBeforCard
                className= "rtTextAbout"
                title= "About SquareUp"
                description= "SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
            />
            <div className='rtContainerImgAbout'>
                <img src="/img/backgrounds/replicate.png" alt="circle wave" className='rtBackCircle'/>
                <img src="/img/backgrounds/blurBack.png" alt="blur" className='rtBlurBack' />
                <div className='rtLayoutCircleWave'></div>
                <div className='rtCircleBlur'></div>
                <div className='rtBorderLine'>
                    <div className='rtBorderTop'></div>
                    <div className='rtBorderBottom'></div>
                </div>
                <div className='rtBorderHorizontal'>
                    <div className='rtBorderRight'></div>
                    <div className='rtBorderLeft'></div>
                </div>
                <div className='rtContainerSquareAbout'><img src="/img/squareIcon.png" alt="square" className='rtSquareAbout'/></div>
            </div>
        </section>
    )
}
