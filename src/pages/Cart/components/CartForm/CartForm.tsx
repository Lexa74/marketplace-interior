import React, {useState} from "react";
import './cart-form.scss'
import {Input} from "../../../../shared/components/Inputs/Input/Input";
import {InputMask} from "@react-input/mask";
import '../../../../shared/components/Inputs/Input/input.scss'

export const CartForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [addressDelivery, setAddressDelivery] = useState('');
    return (
        <div className="cart-form">
            <div className="cart-form__heading">Оформление заказа</div>
            <div className="cart-form__inputs">
                <Input onChange={setName} value={name} placeholder={'Имя Фамилия'} type='text'/>
                <InputMask
                    mask="+ 7 (___) ___ __ __"
                    replacement={{ _: /\d/ }}
                    placeholder={'+ 7 904 000 80 80'}
                    className='input-skeleton'
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
                <Input onChange={setAddressDelivery} value={addressDelivery} placeholder={'Адрес доставки'} type='text'/>
            </div>
            <div className="cart-form__total-price">
                <span>Итого: </span>
            </div>
        </div>
    )
}