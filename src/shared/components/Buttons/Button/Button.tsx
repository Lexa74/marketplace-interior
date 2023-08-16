import React from "react";
import './button.scss'

interface ButtonLightProps {
    children: React.ReactNode,
    variant: string
}

export const Button = ({children, variant}: ButtonLightProps) => {
    return <button className={`btn ${variant}`}>{children}</button>
}