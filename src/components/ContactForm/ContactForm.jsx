import { COLORS } from "../../assets/constants/colors";
import { FONTS } from '../../assets/constants/fonts';
import Button from "../Button/Button";
import CheckboxContainer from "../CheckboxContainer/CheckboxContainer";
import InputsField from "../InputsField/InputsField";
import TextareaField from "../TextareaField/TextareaField";
import './ContactForm.css';
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { setItemInLocalstorage , addToLocalstorage, getItemFromLocalstorage } from "../../utils/localstorage";

const USERS_KEY = "users"
const ACTIVE_KEY = "activeUserName"
export default function ContactForm() {
    const [formData , setFormData] = useState({
        fullName: "",
        email: "",
        reasons: [],
        message: ""
    })

    const { onSaveSuccess } = useOutletContext()

    const myChange = (fieldName , e) => {
        setFormData({ ...formData, [fieldName]: e.target.value})
    }
    const checkboxChange = (value , isChecked)=>{
        let updatedReasons = [...formData.reasons]
        if (isChecked === true) {
            if (!updatedReasons.includes(value))
                updatedReasons.push(value)
        } else {
            updatedReasons = updatedReasons.filter((item) => item !== value)
        }            
        setFormData({ ...formData, reasons: updatedReasons })
    }
    const formSubmit = (e)=>{
        e.preventDefault()
        if(!formData.fullName.trim()){
            alert("Please enter your Full Name")
            return
        }
        console.log("Befor Saving", formData)
        try {
            addToLocalstorage(USERS_KEY , formData)
            setItemInLocalstorage(ACTIVE_KEY, formData.fullName)
            console.log("after Saving" , getItemFromLocalstorage(USERS_KEY))
            console.log("active user name" , getItemFromLocalstorage(ACTIVE_KEY))
            if (onSaveSuccess) {
                onSaveSuccess(formData.fullName)
            }
            setFormData({fullName: "", email: "", reasons: [], message: ""})
            alert("Your data has been saved successfully")
        } catch (error) {
            console.error("Error saving data:", error)
        }
    }
        

    return (
        <form className="rtContactForm" onSubmit={formSubmit}>
            <div className="rtFirstRow">
                <InputsField
                    widthField= "39.3vw"
                    labelField= 'Full Name'
                    labelId= 'fullName'
                    inputType= 'text'
                    value={formData.fullName}
                    onChange={(e)=>myChange("fullName" , e)}
                />
                <InputsField 
                    widthField= '39.3vw'
                    labelField= 'Email'
                    labelId= 'emailfield'
                    inputType= 'email'
                    value={formData.email}
                    onChange={(e)=>myChange("email" , e)}
                />
                
            </div>
            <div className="rtSecondRow">
                <span style={{...FONTS.medium , color: COLORS.absolutefff}}>Why are you contacting us?</span>
                <div className="rtContainerChecks">
                    <div className="rtRowChecks">
                        <CheckboxContainer
                            id= "webDesign"
                            name= "webDesign"
                            labelName= "Web Design"
                            checked={formData.reasons.includes("webDesign")}
                            onChange={(id, isChecked) => checkboxChange(id, isChecked)}
                        />
                        <CheckboxContainer
                            id= "collaboration"
                            name= "collaboration"
                            labelName= "Collaboration"
                            checked={formData.reasons.includes("collaboration")}
                            onChange={(id, isChecked) => checkboxChange(id, isChecked)}
                        />
                    </div>
                    <div className="rtRowChecks">
                        <CheckboxContainer
                            id= "app"
                            name= "app"
                            labelName= "Mobile App Design"
                            checked={formData.reasons.includes("app")}
                            onChange={(id, isChecked) => checkboxChange(id, isChecked)}
                        />
                        <CheckboxContainer
                            id= "others"
                            name= "others"
                            labelName= "Others"
                            checked={formData.reasons.includes("others")}
                            onChange={(id, isChecked) => checkboxChange(id, isChecked)}
                        />
                    </div>
                </div>
            </div>
            <TextareaField
                labelName= "Your Message"
                width= "100%"
                value={formData.message}
                onChange={(e)=>myChange("message" , e)}
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
