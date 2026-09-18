import { COLORS } from '../../assets/constants/colors'
import { FONTS } from '../../assets/constants/fonts'
import './InputsField.css'

export default function InputsField({className, widthField , labelField , labelId , inputType , value , onChange , readOnly = false}) {
    return (
        <div className={`${className} rtContainerInput`} style={{width: widthField}}>
            <label htmlFor={labelId} className='rtLabelForm' style={{...FONTS.medium , color : COLORS.absolutefff}}>{labelField}</label>
            <input 
                readOnly={readOnly}
                type={inputType}
                className='rtInputForm' 
                name={labelId} 
                id={labelId} 
                placeholder='Type here' 
                value={value} 
                onChange={onChange} 
                style={{...FONTS.regular , color: COLORS.absolutefff}}/>
        </div>
    )
} 
