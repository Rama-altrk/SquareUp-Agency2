import InputsField from '../InputsField/InputsField'
import TextareaField from '../TextareaField/TextareaField'
import './ChooseAndServiceForm.css'

function ChooseAndServiceForm() {
    return (
        <form className="mr-chooseAndServiceForm">
            <InputsField
            inputType="file"
            labelField="Please enter the image"
            />
            <InputsField
            inputType="text"
            labelField="Please enter the tatile"
            />

            <TextareaField
            inputType="text"
            labelName="Please enter the content"
            />
        </form>
    )
}

export default ChooseAndServiceForm