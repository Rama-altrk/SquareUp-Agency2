import { COLORS } from "../../assets/constants/colors";
import { FONTS } from '../../assets/constants/fonts';
import Button from "../Button/Button";
import CheckboxContainer from "../CheckboxContainer/CheckboxContainer";
import InputsField from "../InputsField/InputsField";
import TextareaField from "../TextareaField/TextareaField";
import './ContactForm.css';


export default function Form() {
    return (
        <form className="rtContactForm">
            <div className="rtFirstRow">
                <InputsField
                    widthField= "39.3vw"
                    labelField= 'Full Name'
                    labelId= 'fullName'
                    inputType= 'text'
                />
                <InputsField 
                    widthField= '39.3vw'
                    labelField= 'Email'
                    labelId= 'emailfield'
                    inputType= 'email'
                />
                
            </div>
            <div className="rtSecondRow">
                <span style={{...FONTS.medium , color: COLORS.absolutefff}}>Why are you contacting us?</span>
                <div className="rtContainerChecks">
                    <div className="rtRowChecks">
                        <CheckboxContainer
                            id= "web"
                            name= "webDesign"
                            labelName= "Web Design"
                        />
                        <CheckboxContainer
                            id= "collaboration"
                            name= "collaboration"
                            labelName= "Collaboration"
                        />
                    </div>
                    <div className="rtRowChecks">
                        <CheckboxContainer
                            id= "app"
                            name= "app"
                            labelName= "Mobile App Design"
                        />
                        <CheckboxContainer
                            id= "others"
                            name= "other"
                            labelName= "Others"
                        />
                    </div>
                </div>
            </div>
            {/* <div className="rtThirdRow">
                <label htmlFor="message" style={{...FONTS.medium , color: COLORS.absolutefff}}>Your Message</label>
                <div>
                    <textarea name="message" id="message" placeholder="Type here" style={{...FONTS.regular , color: COLORS.absolutefff}}></textarea>
                </div>
            </div> */}
            <TextareaField
                labelName= "Your Message"
                width= "100%"
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
                className= "rtSubmitForm"
            />
        </form>
    )
}
