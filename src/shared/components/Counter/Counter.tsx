import React, {useState} from "react";
import {ArrowUp} from "../../../ui/icons/ArrowUp/ArrowUp";
import {ArrowDown} from "../../../ui/icons/ArrowDown/ArrowDown";
import './counter.scss'
import {useDataStore} from "../../../store/context";

interface CounterProps {
    productId: number,
    min: number,
    max: number,
}

export const Counter = ({productId, min, max}: CounterProps) => {
    const store = useDataStore()
    const quantitiesFromStore = store.goods.quantities[productId];
    const [valueCounter, setValueCounter] = useState(quantitiesFromStore ? quantitiesFromStore : min);

    const onIncrement = () => {
        if(valueCounter >= max) {
            return
        }
        const newValue = valueCounter + 1;
        store.goods.setProductQuantity(productId, newValue);
        setTimeout(() => {
            setValueCounter(newValue);
        }, 0);
    }
    const onDecrement = () => {
        if(valueCounter <= min) {
            return
        }
        const newValue = valueCounter - 1;
        store.goods.setProductQuantity(productId, newValue);
        setTimeout(() => {
            setValueCounter(newValue);
        }, 0);
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