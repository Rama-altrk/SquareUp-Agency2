import Button from '../../../../components/Button/Button'
import InputsField from '../../../../components/InputsField/InputsField'
import TextareaField from '../../../../components/TextareaField/TextareaField'
import './AddAndEditProcess.css'
import { useGenericCardNumberForm } from '../../../../hooks/useGenericCardNumberForm'

const PROCESS_KEY = 'rtProcessStorage'
export default function AddAndEditProcess() {
  const {
      cardNumber, cardTitle, contentCard,
      setCardTitle, setContentCard, cardToEdit, setCardToEdit,
      mySubmit, navigate
  } = useGenericCardNumberForm(PROCESS_KEY, '/dashboard/process')

  return (
    <>
    <Button
        name="← Back"
        borderRadius= "4px"
        border= "1px solid var(--green50)"
        backgroundColor= "var(--green50)"
        fontSize= "16px"
        className="rtBack"
        onClick={() => navigate(-1)}
    />
    <form className='rtProcessAndAboutForm' onSubmit={mySubmit}>
        
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
        <div className='rtActionBtn'>
          <Button 
              name= {cardToEdit ? "Save Change" : "add" }
              borderRadius= "8px"
              border= "1px solid var(--grey20)"
              backgroundColor= "var(--grey12)"
              color= "var(--absolutefff)"
              fontSize= "18px"
              type= "submit"
              className= "rtSubmitForm"
          />

          {cardToEdit && (
            <Button 
              name= "Cancel"
              borderRadius= "8px"
              border= "1px solid var(--grey20)"
              backgroundColor= "var(--grey12)"
              color= "var(--grey30)"
              fontSize= "18px"
              type= "button"
              onClick={() => navigate('/dashboard/process')}
              className= "rtCancelForm"
            />
          )}
        </div>
    </form>
    </>
  )
}
