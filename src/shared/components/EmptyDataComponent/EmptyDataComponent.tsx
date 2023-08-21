import React from "react";
import {Link} from "react-router-dom";
import {Button} from "../Buttons/Button/Button";
import './empty-data-component.scss'

interface EmptyDataComponentProps {
    caption: string,
    buttonName: string,
    buttonLink: string
}

export const EmptyDataComponent = ({caption, buttonName, buttonLink}: EmptyDataComponentProps) => {
    return (
        <>
            <div className='data-empty'>
                <div>
                    <p className='data-empty__info'>{caption}</p>
                    <Link to={buttonLink}><Button variant="dark">{buttonName}</Button></Link>
                </div>
            </div>
        </>
    )
}