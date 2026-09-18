// import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import { useEffect , useState} from 'react'
import Button from '../../../../components/Button/Button'
// import InputsField from '../../../../components/InputsField/InputsField'
// import ProssecAndAboutForm from '../../../../Components/ProcessAndAboutForm/ProcessAndAboutForm'
// import TextareaField from '../../../../components/TextareaField/TextareaField'
import './AddAndEditAbout.css'
import { useGenericCardNumberForm } from '../../../../hooks/useGenericCardNumberForm'
import TextareaField from '../../../../components/TextareaField/TextareaField'
import InputsField from '../../../../components/InputsField/InputsField'
// import TextareaField from '../../../../Components/TextareaField/TextareaField'
// import { addToLocalstorage , getItemFromLocalstorage , setItemInLocalstorage } from '../../../../utils/localStorag'


const ABOUT_KEY = 'rtAboutStorage'
export default function AddAndEditAbout() {
    // const location = useLocation()
    // const navigate = useNavigate()
    // const { id } = useParams()

    // const [cardToEdit , setCardToEdit] = useState(()=>{
    //     if (location.state?.cardToEdit) {
    //         return JSON.parse(JSON.stringify(location.state.cardToEdit))
    //     }
    //     if(id){
    //         const savedCards = getItemFromLocalstorage(ABOUT_KEY)
    //         const card = savedCards.find(card => parseInt(card.id) === parseInt(id))
    //         return card ? JSON.parse(JSON.stringify(card)) : null
    //     }
    //     return null
    // })

    // const [cardNumber, setCardNumber] = useState(cardToEdit ? cardToEdit.cardNumber : '');
    // const [cardTitle, setCardTitle] = useState(cardToEdit ? cardToEdit.cardTitle : '');
    // const [contentCard, setContentCard] = useState(cardToEdit ? cardToEdit.contentCard : '');
    

    // useEffect(()=>{
    //     if(cardToEdit) {
    //         setCardNumber(cardToEdit.cardNumber || '')
    //         setCardTitle(cardToEdit.cardTitle || '');
    //         setContentCard(cardToEdit.contentCard || '');
    //     }else{
    //         const currentCards= getItemFromLocalstorage(ABOUT_KEY)
    //         const maxCardNumber = currentCards.reduce((max, card) => {
    //         const num = parseInt(card.cardNumber) || 0
    //         return num > max ? num : max
    //         }, 0)
    //         const nextCardNumber = maxCardNumber + 1
    //         const formattedNumber = nextCardNumber.toString().padStart(2, '0')
    //         setCardNumber(formattedNumber)
    //         setCardTitle('')
    //         setContentCard('')
    //     }
    // }, [id ,cardToEdit])

    // const mySubmit = (event)=>{
    //     event.preventDefault()
    //     console.log("submit")
        
    //     const cardData = {cardNumber , cardTitle , contentCard}
    
    //     const savedCards = getItemFromLocalstorage(ABOUT_KEY)
    //     if(cardToEdit && cardToEdit.id){
    //     const copyOfCards = [...savedCards]
    //     const updatedCards = copyOfCards.map(card => {
    //         if (parseInt(card.id) === parseInt(cardToEdit.id)){
    //         return { ...card, ...cardData }
    //     }
    //         return {...card}
    //     })
    //     setItemInLocalstorage(ABOUT_KEY , updatedCards)
    //     }else{
    //     addToLocalstorage(ABOUT_KEY , cardData)
    //     }
    
    //     navigate('/dashboard/about')
    // }
    const {
        cardNumber, cardTitle, contentCard,
        setCardTitle, setContentCard, cardToEdit, setCardToEdit,
        mySubmit, navigate
    } = useGenericCardNumberForm(ABOUT_KEY, '/dashboard/about')
    return (
            <form className='rtProcessAndAboutForm' onSubmit={mySubmit} >
                <InputsField
                    readOnly={true}
                    labelId= "idCard"
                    inputType= "text"
                    widthField= "100%"
                    labelField= "Number of card"
                    value={cardNumber}
                />
                <InputsField
                    labelId= "titleCard"
                    inputType= "text"
                    widthField= "100%"
                    labelField= "Please Enter your card title"
                    value = {cardTitle}
                    onChange={(event) => setCardTitle(event.target.value)}
                />
                <TextareaField
                    width= "100%"
                    labelName="Please enter your card's content"
                    value={contentCard}
                    onChange={(event) => setContentCard(event.target.value)} 
                />
                <Button 
                    name= {cardToEdit ? "Save Change" : "add" }
                    width= "145px"
                    height= "63px"
                    borderRadius= "8px"
                    border= "1px solid var(--green50)"
                    backgroundColor= "var(--green50)"
                    color= "var(--grey10)"
                    fontSize= "18px"
                    className= "rtSubmitAddForm"
                    type= "submit"
                />
                {cardToEdit && (
                    <Button 
                        name= "Cencel"
                        width= "145px"
                        height= "63px"
                        borderRadius= "8px"
                        border= "1px solid var(--green50)"
                        backgroundColor= "var(--green50)"
                        color= "var(--grey10)"
                        fontSize= "18px"
                        type= "button"
                        onClick={() => navigate('/dashboard/about')}
                        className= "rtSubmitAddForm"
                    />
                )}
            </form>
    )
}
