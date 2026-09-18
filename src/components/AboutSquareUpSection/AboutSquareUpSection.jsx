import './AboutSquareUpSection.css'

function AboutSquareUpSection() {
    return (
        <section className="mr-aboutSquareUp">

            <div className="mr-aboutContainer-text">

                <div className="text-container">
                    <h1>About SquareUp</h1>
                    <p>SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
                </div>

                <div className="mr-image">
                    <div className="background-efect">

                        <img src="/img/backgrounds/replicate.png" alt="replicate.png" className='mr-background' />

                    </div>

                    <div className="mr-logo-img">
                        <img src="/img/squareIcon.png" alt="squareIcon.png" />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default AboutSquareUpSection