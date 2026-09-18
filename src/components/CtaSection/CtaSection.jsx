import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './CtaSection.css'

function CtaSection({className}) {
    return (
        <section className={`${className} mr-sectionCta`}>

            <div className="mr-container">
                <div className="mr-logo-cta"><img src="/img/squareIcon.png" alt="squareIcon" /></div>
                <div className="mr-text-cta">
                    <h2>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h2>
                    <p>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on  their journey and discover how they can help bring your digital ideas to life.</p>
                </div>
            </div>
            <div className="mr-subContainer">
                
                <div className='rtParagraphAndButton'>
                    <h3>Welcome to SquareUp</h3>
                    <div className="mr-p-container">
                        <p>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</p>
                    </div>
                </div>
                <Link to= "/work">
                    <Button  
                    className="startProjcet"
                    name="Start Project"
                    width="8.8vw"
                    height={63}
                    backgroundColor="var(--green50)"
                    color="var(--grey10)"
                    border="none"
                    borderRadius={8}
                    fontSize={18}
                    />
                </Link>
            </div>

        </section>
    )
}

export default CtaSection