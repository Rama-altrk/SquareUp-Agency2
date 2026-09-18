import { useState , useEffect } from "react";
import { useLocation , useNavigate , useParams } from "react-router-dom";
import { getItemFromLocalstorage , setItemInLocalstorage , addToLocalstorage} from "../utils/localstorage";

export function useGenericCardNumberForm(storageKey , redirectPath){
    const location = useLocation()
    const navigate = useNavigate()
    const { id } = useParams()

    const [cardToEdit , setCardToEdit] = useState(()=>{
        if (location.state?.cardToEdit) {
            // return {...location.state.cardToEdit}
            return JSON.parse(JSON.stringify(location.state.cardToEdit))
        }
        if(id){
            const savedCards = getItemFromLocalstorage(storageKey)
            const card = savedCards.find(card => parseInt(card.id) === parseInt(id))
            return card ? JSON.parse(JSON.stringify(card)) : null
        }
        return null
    })
    const [cardNumber, setCardNumber] = useState(cardToEdit ? cardToEdit.cardNumber : '');
    const [cardTitle, setCardTitle] = useState(cardToEdit ? cardToEdit.cardTitle : '');
    const [contentCard, setContentCard] = useState(cardToEdit ? cardToEdit.contentCard : '');

    useEffect(()=>{
        if(cardToEdit) {
            setCardNumber(cardToEdit.cardNumber || '')
            setCardTitle(cardToEdit.cardTitle || '');
            setContentCard(cardToEdit.contentCard || '');
        }else{
            const currentCards= getItemFromLocalstorage(storageKey)
            const maxCardNumber = currentCards.reduce((max, card) => {
            const num = parseInt(card.cardNumber) || 0
            return num > max ? num : max
            }, 0)
            const nextCardNumber = maxCardNumber + 1
            const formattedNumber = nextCardNumber.toString().padStart(2, '0')
            setCardNumber(formattedNumber)
            setCardTitle('')
            setContentCard('')
        }
    }, [id ,cardToEdit ,storageKey])

    const mySubmit = (event)=>{
        event.preventDefault()
        console.log("submit")
        
        const cardData = {cardNumber , cardTitle , contentCard}
    
        const savedCards = getItemFromLocalstorage(storageKey)
        if(cardToEdit && cardToEdit.id){
        const copyOfCards = [...savedCards]
        const updatedCards = copyOfCards.map(card => {
            if (parseInt(card.id) === parseInt(cardToEdit.id)){
            return { ...card, ...cardData }
        }
            return {...card}
        })
        setItemInLocalstorage(storageKey , updatedCards)
        }else{
        addToLocalstorage(storageKey , cardData)
        }
    
        navigate(redirectPath)
    }

    return{
        cardNumber,
        cardTitle,
        contentCard,
        setCardTitle,
        setContentCard,
        cardToEdit,
        setCardToEdit,
        mySubmit,
        navigate
    }
}