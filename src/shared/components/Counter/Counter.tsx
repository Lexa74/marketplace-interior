import React, {useState} from "react";
import {ArrowUp} from "../../../ui/icons/ArrowUp";
import {ArrowDown} from "../../../ui/icons/ArrowDown";
import './counter.scss'
import {useDataStore} from "../../../store/context";

interface CounterProps {
    productId: number,
    min: number,
    max: number,
}

export const Counter = ({productId, min, max}: CounterProps) => {
    const [valueCounter, setValueCounter] = useState(min);
    const store = useDataStore()

    const onIncrement = () => {
        if(valueCounter >= max) {
            return
        }
        setValueCounter(prev => {
            const newValue = prev + 1;
            store.goods.setProductQuantity(productId, newValue);
            return newValue;
        })
    }
    const onDecrement = () => {
        if(valueCounter <= min) {
            return
        }
        setValueCounter(prev => {
            const newValue = prev - 1;
            store.goods.setProductQuantity(productId, newValue);
            return newValue;
        })
    }
    return (
        <div className='counter'>
            <div className="counter__value">{valueCounter}</div>
            <div className="counter__actions">
                <div className="counter__plus" onClick={onIncrement}><ArrowUp/></div>
                <div className="counter__minus" onClick={onDecrement}><ArrowDown/></div>
            </div>
        </div>
    )
};