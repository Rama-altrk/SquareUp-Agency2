
import { useState , useEffect } from 'react';
import CardNumber from '../../components/CardNumaber/CardNumber'
import Container from '../../components/Container/Container'
// import AtSquareUpSection from '../../components/AtSquareUpSection/AtSquareUpSection'
import './Process.css'
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SquareUp from '../../components/SquareUp/SquareUp';
import TextBeforCard from '../../components/TextBeforCard/TextBeforCard';
import RtCardNumber from '../../components/RtCardNumber/RtCardNumber';
import { getItemFromLocalstorage , setItemInLocalstorage} from '../../utils/localstorage';


const PROCESS_KEY = 'rtProcessStorage'
const RtProcessData =[
  {
    id: 1,
    cardNumber: "01",
    cardTitle: "Discovery",
    contentCard: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
  },

  {
    id: 2,
    cardNumber: "02",
    cardTitle: "Planning and Strategy",
    contentCard: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
  },

  {
    id: 3,
    cardNumber: "03",
    cardTitle: "Design",
    contentCard: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
  },
  {
    id: 4,
    cardNumber: "04",
    cardTitle: "Development",
    contentCard: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.",
  },
  {
    id: 5,
    cardNumber: "05",
    cardTitle: "Testing and Quality Assurance",
    contentCard: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.",
  },
  {
    id: 6,
    cardNumber: "06",
    cardTitle: "Deployment and Launch",
    contentCard: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.",
  },
  {
    id: 7,
    cardNumber: "07",
    cardTitle: "Post-Launch Support",
    contentCard: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
  },
  {
    id: 8,
    cardNumber: "08",
    cardTitle: "Continuous Improvement",
    contentCard: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.",
  },
]
export default function Process() {

  const Card = [
    {
      id: 1,
      title: "01",
      badge: "Discovery",
      content: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
      width: 798,
      height: 463
    },

    {
      id: 2,
      title: "02",
      badge: "Planning and Strategy",
      content: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
      width: 798,
      height: 463
    },

    {
      id: 3,
      title: "03",
      badge: "Design",
      content: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
      width: 798,
      height: 463
    },
    {
      id: 4,
      title: "04",
      badge: "Development",
      content: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.",
      width: 798,
      height: 463
    },
    {
      id: 5,
      title: "05",
      badge: "Testing and Quality Assurance",
      content: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.",
      width: 798,
      height: 463
    },
    {
      id: 6,
      title: "06",
      badge: "Deployment and Launch",
      content: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.",
      width: 798,
      height: 463
    },
    {
      id: 7,
      title: "07",
      badge: "Post-Launch Support",
      content: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
      width: 798,
      height: 463
    },
    {
      id: 8,
      title: "08",
      badge: "Continuous Improvement",
      content: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.",
      width: 798,
      height: 463
    },

  ]
  // const [cards , setCards] = useState([])
  // const RtProcessData =[
  //   {
  //     id: 1,
  //     cardNumber: "01",
  //     cardTitle: "Discovery",
  //     contentCard: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
  //   },

  //   {
  //     id: 2,
  //     cardNumber: "02",
  //     cardTitle: "Planning and Strategy",
  //     contentCard: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
  //   },

  //   {
  //     id: 3,
  //     cardNumber: "03",
  //     cardTitle: "Design",
  //     contentCard: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
  //   },
  //   {
  //     id: 4,
  //     cardNumber: "04",
  //     cardTitle: "Development",
  //     contentCard: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.",
  //   },
  //   {
  //     id: 5,
  //     cardNumber: "05",
  //     cardTitle: "Testing and Quality Assurance",
  //     contentCard: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.",
  //   },
  //   {
  //     id: 6,
  //     cardNumber: "06",
  //     cardTitle: "Deployment and Launch",
  //     contentCard: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.",
  //   },
  //   {
  //     id: 7,
  //     cardNumber: "07",
  //     cardTitle: "Post-Launch Support",
  //     contentCard: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
  //   },
  //   {
  //     id: 8,
  //     cardNumber: "08",
  //     cardTitle: "Continuous Improvement",
  //     contentCard: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.",
  //   },
  // ]
  
  const [cards , setCards] = useState(()=>{
          const saved = getItemFromLocalstorage(PROCESS_KEY)
          if(!saved || saved.length === 0){
              setItemInLocalstorage(PROCESS_KEY , RtProcessData)
              return RtProcessData
          }
          return saved
      })
      useEffect(()=>{
          const saved = getItemFromLocalstorage(PROCESS_KEY)
          if(saved){
              setCards(saved)
          }
      },[location.key])

  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCards = isExpanded ? cards : cards.slice(0, 4);
  return (
    <>

      <SectionHeading
        className= "rtProcessHeading"
        title= "Process of Starting the Project"
        description= "At SquareUp, we value transparency, collaboration, and delivering exceptional results."
        background="doubleWaveToUp.png"
      />
      {/* <Container>
        
        {
          Card.map((item) => {
            return (
              <CardNumber
                title={item.title}
                badge={item.badge}
                content={item.content}
                width={item.width}
                height={item.height}
                className="process-Card"
                key={item.id}
              />
            )
          })
        }
      </Container> */}
      <section>
        <TextBeforCard
          title= "At SquareUp"
          description= "We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
          subTitle= "Here's an overview of our typical process:"
        />
        <div className="rtProcessGrid">
          {cards && cards.length>0 ?
          (visibleCards.map((item) => (
            <RtCardNumber
              key={item.id}
              cardNumber={item.cardNumber}
              cardTitle={item.cardTitle}
              contentCard={item.contentCard}
              className= "rtProcessCard"
            />
          ))):(
            <h3>No cards for appear</h3>
          )}
          
        </div>
        <div className='rtContainerShowProcess'>
          <button 
            className="rtShowProcess" 
            onClick={() => setIsExpanded(!isExpanded)} >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
      <SquareUp 
        title="Thank you for your Interest in SquareUp."
        description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
      />

    </>
  )
}
