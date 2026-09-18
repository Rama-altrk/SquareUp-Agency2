import Button from '../../../components/Button/Button'
import RtCardNumber from '../../../components/RtCardNumber/RtCardNumber'
import './DashboardProcess.css'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
import { getItemFromLocalstorage , removeFromLocalstorage , setItemInLocalstorage} from '../../../utils/localstorage'

const PROCESS_KEY = "rtProcessStorage"
const rtProcessDataInit =[
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

export default function DashboardProcess() {
    const navigate = useNavigate()
    const location = useLocation()
    const [cards , setCards] = useState(()=>{
        const saved= getItemFromLocalstorage(PROCESS_KEY)
        if(!saved || saved.length === 0){
            setItemInLocalstorage(PROCESS_KEY , rtProcessDataInit)
        return rtProcessDataInit
        }
        return saved
    })

    const freshData = () => {
        const saved = getItemFromLocalstorage(PROCESS_KEY)
        if (saved) {
            setCards([...saved])
        }else{
            setCards([])
        }
    }

    useEffect(() => {
        freshData()
    }, [location.key])

    console.log(getItemFromLocalstorage(PROCESS_KEY))

    const myDelete = (id)=>{
        if(window.confirm("Are you sure from delete this card?")){
            const updatedList = removeFromLocalstorage(PROCESS_KEY , id)
            setCards(updatedList)
        }
    }
    
    // const finalCards = getItemFromLocalstorage(PROCESS_KEY)
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
                    onClick={() => navigate('add')}
                />
            </Link>
            <div className="rtProcessDash">
                {cards.map((item) => (
                <RtCardNumber
                    key={item.id}
                    cardNumber={item.cardNumber}
                    cardTitle={item.cardTitle}
                    contentCard={item.contentCard}
                    className= "rtProcessCardDash"
                    linkEdit= {`/dashboard/process/edit/${item.id}`}
                    classNameAction= "rtDashAction"
                    classNameMainContainer= "rtMainProcess"
                    onClickEdit={() => navigate(`/dashboard/process/edit/${item.id}`, { state: { cardToEdit: item } })}
                    onClickDelete={() => myDelete(item.id)}
                    classDelete= "rtButtonDelete"
                />
                ))}
            </div>
        </>
    )
}
