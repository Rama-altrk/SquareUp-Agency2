import SectionHeading from '../../../components/SectionHeading/SectionHeading'
import { Link } from 'react-router-dom'
import './DashboardHome.css'

export default function DashboardHome() {
    return (
        <div className='rt'>
            <div className='rtTop'>
                <Link to= "services">
                    <SectionHeading
                        className= "rtSectionCrud"
                        title= "Our Services"
                        background= "straight.png"
                    />
                </Link>
                <Link to= "chooseUs">
                    <SectionHeading
                        className= "rtSectionCrud"
                        title= "Why Choose Us"
                        background= "waveToDown.png"
                    />
                </Link>
            </div>
            <div className='rtBottom'>
                <Link to= "feedback">
                    <SectionHeading
                        className= "rtSectionCrud"
                        title= "Feedback"
                        background= "waveToUp.png"
                    />
                </Link>
                <Link to= "faq">
                    <SectionHeading
                        className= "rtSectionCrud"
                        title= "Faq"
                        background= "doubleWaveToUp.png"
                    />
                </Link>
            </div>
        </div>
    )
}
