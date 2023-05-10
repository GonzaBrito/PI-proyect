import React from 'react';
import "./input.css";

const Input = ({ label, type, name, onChange, value }) => {
    return (
        <div>
            <label >
                {label}
                <input
                    name={name}
                    value={value}
                    className='input-input'
                    onChange={onChange} 
                    type={type || "text"}
                />
            </label>
        </div>
    )
}

export default Input;
