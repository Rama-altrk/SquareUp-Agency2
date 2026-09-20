import './About.css'
import Container from '../../components/Container/Container'
import CardNumber from '../../components/CardNumaber/CardNumber'
import AboutSquareUpSection from '../../components/AboutSquareUpSection/AboutSquareUpSection'
import CtaSection from "../../components/CtaSection/CtaSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import RtCardNumber from '../../components/RtCardNumber/RtCardNumber';
import TextAbout from '../../components/TextAbout/TextAbout';
import { useEffect } from 'react';
import { getItemFromLocalstorage, setItemInLocalstorage } from '../../utils/localstorage';
import { useState } from 'react';


const ABOUT_KEY = 'rtAboutStorage'
const rtAboutData = [
    {
        id: 1,
        cardNumber: "01",
        cardTitle: "Design",
        contentCard: "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
    },

    {
        id: 2,
        cardNumber: "02",
        cardTitle: "Engineering",
        contentCard: "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
    },

    {
        id: 3,
        cardNumber: "03",
        cardTitle: "Project Management",
        contentCard: "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
    },
    {
        id: 4,
        cardNumber: "04",
        cardTitle: "Collaboration",
        contentCard: "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
    },
    {
        id: 5,
        cardNumber: "05",
        cardTitle: "Client-Centric Approach",
        contentCard: "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
    },
    {
        id: 6,
        cardNumber: "06",
        cardTitle: "Driving Success",
        contentCard: "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
    }
]
export default function About() {
    const Card = [
        {
            id: 1,
            title: "01",
            badge: "Design",
            content: "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
            width: 797.5,
            height: "517",
            color:"var(--green80)"
        },

        {
            id: 2,
            title: "02",
            badge: "Engineering",
            content: "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
            width: 797.5,
            height: "517",
            color:"var(--green80)"
        },

        {
            id: 3,
            title: "03",
            badge: "Project Management",
            content: "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
            width: 797.5,
            height: "517",
            color:"var(--green80)"
        },
        {
            id: 4,
            title: "04",
            badge: "Collaboration",
            content: "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
            width: 797.5,
            height: "517",
            color:"var(--green80)"
        },
        {
            id: 5,
            title: "05",
            badge: "Client-Centric Approach",
            content: "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
            width: 797.5,
            height: "517",
            color:"var(--green80)"
        },
        {
            id: 6,
            title: "06",
            badge: "Driving Success",
            content: "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
            width: 797.5,
            height: "517",
            color:"var(--green80)"
        }
    ]

    const [cards , setCards] = useState(()=>{
        const saved = getItemFromLocalstorage(ABOUT_KEY)
        if(!saved || saved.length === 0){
            setItemInLocalstorage(ABOUT_KEY , rtAboutData)
            return rtAboutData
        }
        return saved
    })
    useEffect(()=>{
        const saved = getItemFromLocalstorage(ABOUT_KEY)
        if(saved){
            setCards(saved)
        }
    },[location.key])
    return (
        <>
            <SectionHeading
                className= "rtAboutHeading"
                title="About Us"
                description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
                background="straight.png"
            />
            
            {/* <Container>

                <AboutSquareUpSection />
                <div className="ourStory">
                    <h1>Our Story</h1>
                </div>
                {
                    Card.map((item) => {
                        return (
                            <CardNumber
                                title={item.title}
                                badge={item.badge}
                                content={item.content}
                                width={item.width}
                                height={item.height}
                                color={item.color}
                                className="aboutCard"
                                key={item.id}
                            />
                        )
                    })
                }
            </Container> */}
            <TextAbout/>
            <section className='rtAboutSection'>
                <h2>Our Story</h2>
                <div className="rtAboutGrid">
                    {cards && cards.length > 0 ?(
                    cards.map((item) => (
                    <RtCardNumber
                        key={item.id}
                        cardNumber={item.cardNumber}
                        cardTitle={item.cardTitle}
                        contentCard={item.contentCard}
                        className= "rtAboutCard"
                    />
                    ))):(
                        <h3>No cards for appear</h3>
                    )}
                </div>
            </section>
            <CtaSection/>
        </>
    )
}
