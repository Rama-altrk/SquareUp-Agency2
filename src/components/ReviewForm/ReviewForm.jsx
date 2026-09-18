import './ReviewForm.css'
import { FONTS } from '../../assets/constants/fonts'
import { COLORS } from '../../assets/constants/colors'
import InputsField from '../InputsField/InputsField'
import TextareaField from '../TextareaField/TextareaField'
import Button from '../Button/Button'

function ReviewForm() {
  return (
   <form action="" style={{display:"flex",flexDirection:"column",gap:10}}>
        <div style={{display:"flex",gap:10}} className='bh-row1'>
            <InputsField
                className=""
                widthField="50%"
                labelField="Review Title"
                inputType="Text"
                labelId="title"/> 
            <TextareaField
                className="bh-textarea"
                labelName="Review Description"
                width="50%"/>
        </div>
        <div style={{display:"flex",gap:10}} className='bh-row2'>
            <InputsField 
                className=""
                widthField="50%"
                labelField="Full Name"
                inputType="Text"
                labelId="authorTitle"/>
            
            <InputsField 
                className=""
                widthField="50%"
                labelField="Job Title"
                inputType="Text"
                labelId="authorTitle"/>

        </div>
        <div style={{display:"flex",justifyContent:"space-between" ,alignItems:"center",gap:10}} className='bh-row3'>
            <InputsField
                className="title"
                widthField="50%"
                labelField="Profile Image"
                inputType="file"
                labelId="title"/>
            <Button 
                    name="Submit"
                    width="149px"
                    height="63px"
                    fontSize="18px"
                    borderRadius="6px"
                    backgroundColor="var(--green50)"
                    color=" var(--grey15)"
                    border=""
                    className="bh-bn"/>
        </div>



    
   </form>
  )
}

export default ReviewForm
