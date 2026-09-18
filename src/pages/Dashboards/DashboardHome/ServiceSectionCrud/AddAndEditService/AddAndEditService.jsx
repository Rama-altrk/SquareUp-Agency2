import Button from '../../../../../components/Button/Button'
import InputsField from '../../../../../components/InputsField/InputsField'
import TextareaField from '../../../../../components/TextareaField/TextareaField'
import './AddAndEditService.css'
import { useGenericImageCardForm } from '../../../../../hooks/useGenericImageCardForm'

const SERVICES_KEY = 'rtServicesStorage'
export default function AddAndEditService() {
  const {
      cardImg, cardTitle, contentCard, setCardImg,
      setCardTitle, setContentCard, cardToEdit, setCardToEdit,
      mySubmit, navigate
  } = useGenericImageCardForm(SERVICES_KEY, '/dashboard/services')
  
  return (
    <form className='rtServicesForm' onSubmit={mySubmit}>
        <InputsField
            labelId= "imgCard"
            inputType= "text"
            widthField= "100%"
            labelField= "Enter your URL img"
            value={cardImg}
            onChange={(event) => setCardImg(event.target.value)} 
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
            type= "submit"
            className= "rtSubmitAddChooseForm"
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
            onClick={() => navigate('/dashboard/services')}
            className= "rtSubmitAddChooseForm"
          />
          )}

    </form>
  )
}
