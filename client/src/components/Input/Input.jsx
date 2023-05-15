import React from 'react';
import "./input.css";

const Input = ({ label, type, name, onChange, value, error }) => {
    return (
        <div>
            <label >
                {label}
                <div className='Errors'>
                    <input
                        name={name}
                        value={value}
                        onChange={onChange}
                        type={type || "text"}
                        className='input-input'
                    />
                    {error && <span>{error}</span>}
                </div>
            </label>
        </div>
    )
}

export default Input;
