import React, { useEffect } from 'react'
import './ServicesCards.css'
import '../../assets/styles/colors.css'
import '../../assets/styles/fonts.css'
import { COLORS } from '../../assets/constants/colors'
// import { getItemFromLocalstorage } from '../../utils/localstorag'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { MdEdit, MdDelete} from "react-icons/md";

// const servicesData = [
//     {
//         id: 1,
//         cardTitle: "Design",
//         contentCard: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
//         cardImg: "/img/homeImg/DesignIcon.png" 
//     },
//     {
//         id: 2,
//         cardTitle: "Engineering",
//         contentCard: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
//         cardImg: "/img/homeImg/EngineeringIcon.png"
//     },
//     {
//         id: 3,
//         cardTitle: "Project Management",
//         contentCard: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
//         cardImg: "/img/homeImg/ProjectManagementIcon.png"
//     }
// ]

const ServicesCards = ({servicesData , className , classNameAction , linkEdit , onClickEdit , onClickDelete ,classDelete}) => {

return (
    <section className='bs-services-section'>
        <div className={`bs-services-grid ${className}`}>
            {servicesData && servicesData.length > 0 ? (
            servicesData.map((service) => (
                <div key={service.id} className="bs-service-card">
                    <div className='rtServicesCard'>
                        <div>
                            <div className="bs-container">
                                <div className="bs-service-square">
                                    <img src={service.cardImg} alt={service.cardImg} />
                                </div>
                                <h3>{service.cardTitle}</h3>
                                
                            </div>
                            <p>{service.contentCard}</p>
                        </div>
                        <button className="bs-learn-more-btn">Learn More</button>
                    </div>
                    <div className={`rtStorageActionServices ${classNameAction}`}>
                        <Link to={`${linkEdit}/${service.id}`} className='rtEditPen'
                            state={{ cardToEdit: service }}>
                            <Button
                            name= {<MdEdit />}
                            width= "46px"
                            height= "46px"
                            fontSize= "30px"
                            backgroundColor= "var(--green50)"
                            border= "1px solid var(--green50)"
                            borderRadius= "6px"
                            onClick={onClickEdit}
                            className="rtEdit"
                            />
                        </Link>
                        <Button
                            name= {<MdDelete />}
                            width= "46px"
                            height= "46px"
                            fontSize= "30px"
                            backgroundColor= "red"
                            border= "1px solid red"
                            borderRadius= "6px"
                            className= {`rtDelete ${classDelete}`}
                            onClick={() => onClickDelete(service.id)}
                            type= "button"
                            
                        />
                    
                    </div>
                </div>
            ))):(
                <p style={{color: COLORS.absolutefff, textAlign: 'center'}}>No services found</p>
            )}
            
        </div>
    </section>
)
}

export default ServicesCards