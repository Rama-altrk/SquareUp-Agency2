import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import './CheckboxContainer.css'

export default function CheckboxContainer({ id, name, labelName, checked, onChange }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <label htmlFor={id} className='rtLabelCheckbox'>
            <input type="checkbox" name={name} id={id}
                checked={checked}
                onChange={(e) => onChange(id, e.target.checked)} 
            />
            <div className="rtMyCheckbox">
                {checked && <FaCheck className="rtCheckIcon" />}
            </div>
            <span>{labelName}</span>
        </label>
    )
}
