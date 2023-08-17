import React from "react";
import './button.scss'

interface ButtonLightProps {
    children: React.ReactNode,
    variant: string,
    className?: string
}

export const Button = ({children, variant, className}: ButtonLightProps) => {
    return <button className={`btn ${variant} ${className}`}>{children}</button>
}