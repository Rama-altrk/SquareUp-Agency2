import { useEffect, useState } from 'react'
import Button from '../../../../components/Button/Button'
import './ServiceSectionCrud.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getItemFromLocalstorage, setItemInLocalstorage ,removeFromLocalstorage } from '../../../../utils/localstorage'
import ServicesCards from '../../../../components/ServicesCards/ServicesCards'

const SERVICES_KEY = 'rtServicesStorage'
export default function ServiceSectionCrud() {
  const servicesDataInit = [
    {
        id: 1,
        cardTitle: "Design",
        contentCard: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        cardImg: "/img/homeImg/DesignIcon.png" 
    },
    {
        id: 2,
        cardTitle: "Engineering",
        contentCard: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        cardImg: "/img/homeImg/EngineeringIcon.png"
    },
    {
        id: 3,
        cardTitle: "Project Management",
        contentCard: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        cardImg: "/img/homeImg/ProjectManagementIcon.png"
    }
  ]
  
  const navigate = useNavigate()
  const location = useLocation()
  const [services , setServices] = useState(()=>{
    const saved = getItemFromLocalstorage(SERVICES_KEY)
    if(!saved || saved.length === 0){
      setItemInLocalstorage(SERVICES_KEY , servicesDataInit)
      return servicesDataInit
    }
    return saved
  })

  const freshServicesData = () =>{
    const saved = getItemFromLocalstorage(SERVICES_KEY)
    if (saved) {
      setServices([...saved])
    }else{
      setServices([])
    }
  }


  
  useEffect(()=>{
    freshServicesData()
  },[location.key])

  console.log(getItemFromLocalstorage(SERVICES_KEY))

  const myDelete = (id)=> {
    if(window.confirm("Are you sure from delete this card?")){
      const updatedList = removeFromLocalstorage(SERVICES_KEY , id)
      setServices(updatedList);
    }
  }
  return (
    <>
      <Link to="add">
          <Button 
              name= "add"
              width="100%"
              height= "34px"
              fontSize= "28px"
              backgroundColor= "var(--green50)"
              border= "1px solid var(--green50)"
              color= "var(--grey30)"
              borderRadius= "8px"
          />
      </Link>
      <ServicesCards
        className= "rtCardDash"
        servicesData={services}
        classNameAction= "rtActionServices"
        linkEdit= {`/dashboard/services/edit`}
        onClickDelete={myDelete}
      />
    </>
  )
}
