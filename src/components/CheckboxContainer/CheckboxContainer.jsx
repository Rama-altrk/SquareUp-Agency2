import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import './CheckboxContainer.css'

export default function CheckboxContainer({id, name , labelName}) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <label htmlFor={id} className='rtLabelCheckbox'>
            <input type="checkbox" name={name} id={id}
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} 
            />
            <div className="rtMyCheckbox">
                {isChecked && <FaCheck className="rtCheckIcon" />}
            </div>
            <span>{labelName}</span>
        </label>
    )
}
