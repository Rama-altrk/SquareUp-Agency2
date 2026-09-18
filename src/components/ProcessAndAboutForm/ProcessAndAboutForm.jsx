import Button from '../Button/Button'
import InputsField from '../InputsField/InputsField'
import TextareaField from '../TextareaField/TextareaField'
import './ProcessAndAboutForm.css'

export default function PossecAndAboutForm() {
    return (
        <form className='rtProcessAndAboutForm' >
            <InputsField
                labelId= "idCard"
                inputType= "text"
                widthField= "100%"
                labelField= "Number of card"
            />
            <InputsField
                labelId= "titleCard"
                inputType= "text"
                widthField= "100%"
                labelField= "Please Enter your card title"
            />
            <TextareaField
                width= "100%"
                labelName="Please enter your card's content"
            />
            <Button 
                name= "Submit"
                width= "145px"
                height= "63px"
                borderRadius= "8px"
                border= "1px solid var(--green50)"
                backgroundColor= "var(--green50)"
                color= "var(--grey10)"
                fontSize= "18px"
                className= "rtSubmitAddForm"
            />
        </form>
    )
}
