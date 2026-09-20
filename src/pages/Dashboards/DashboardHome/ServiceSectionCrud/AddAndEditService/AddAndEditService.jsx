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
                    onClick={() => navigate('/dashboard/services')}
                    className= "rtCancelForm"
                    />
                )}
            </div>

        </form>
    </>
  )
}
