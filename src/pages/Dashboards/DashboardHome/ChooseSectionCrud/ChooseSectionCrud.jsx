import Button from '../../../../components/Button/Button'
import './ChooseSectionCrud.css'
import { Link , useLocation , useNavigate } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { getItemFromLocalstorage , removeFromLocalstorage ,setItemInLocalstorage} from '../../../../utils/localstorage'
import CardWyhChoose from '../../../../components/CardWyhChoose/CardWyhChoose'

const CHOOSE_KEY = 'rtChooseStorage'
export default function ChooseSectionCrud() {
  const cardsInit = [
        {
            id: 1,
            cardImg: "/img/homeImg/ExpertiseIcon.png",
            cardTitle: "Expertise",
            contentCard: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
        },

        {
            id: 2,
            cardImg: "/img/homeImg/ClientCentricIcon.png",
            cardTitle: "Client-Centric Approach",
            contentCard: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",

        },

        {
            id: 3,
            cardImg: "/img/homeImg/Results-DrivenIcon.png",
            cardTitle: "Results-Driven Solutions",
            contentCard: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
        },
        {
            id: 4,
            cardImg: "/img/homeImg/CollaborativeIcon.png",
            cardTitle: "Collaborative Partnership",
            contentCard: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
        }
    ]
  const navigate = useNavigate()
  const location = useLocation()
  const [cards , setCards] = useState(()=>{
      const saved= getItemFromLocalstorage(CHOOSE_KEY)
      if(!saved || saved.length === 0){
        setItemInLocalstorage(CHOOSE_KEY , cardsInit)
        return cardsInit
      }
      return saved
  })

  const freshData = () => {
      const saved = getItemFromLocalstorage(CHOOSE_KEY)
      if (saved) {
          setCards([...saved])
      }else{
          setCards([])
      }
  }

  useEffect(() => {
      freshData()
  }, [location.key])

  console.log(getItemFromLocalstorage(CHOOSE_KEY))

  const myDelete = (id)=>{
      if(window.confirm("Are you sure from delete this card?")){
          const updatedList = removeFromLocalstorage(CHOOSE_KEY , id)
          setCards(updatedList)
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
              onClick={()=> navigate('add')}
          />
      </Link>
      <div className="rtChooseDash">
          {cards.map((item) => (
          <CardWyhChoose
            key={item.id}
            image={item.cardImg}
            title={item.cardTitle}
            contnet={item.contentCard}
            classNameContainer= "rtChooseContainer"
            classNameCard= "rtChooseCardDash"
            classNameAction= "rtActionChoose"
            linkEdit={`/dashboard/ChooseUs/edit/${item.id}`}
            onClickEdit={() => navigate(`/dashboard/chooseUs/edit/${item.id}`, { state: { cardToEdit: item } })}
            onClickDelete={() => myDelete(item.id)}
            
          />
          ))}
      </div>
    </>
  )
}
