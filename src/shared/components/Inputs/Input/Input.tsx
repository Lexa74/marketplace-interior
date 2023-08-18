import React from "react";
import './input.scss'

interface InputProps {
    onChange: (value: string) => void,
    value: string,
    placeholder: string,
    type?: string
}

export const Input = ({onChange, value, placeholder, type='text'}:InputProps) => {
    return (
        <input
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder={placeholder}
            type={type}
            className='input-skeleton' />
    )
}