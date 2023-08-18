import React, {useState} from "react";
import './cart-form.scss'
import {Input} from "../../../../shared/components/Inputs/Input/Input";
import {InputMask} from "@react-input/mask";
import '../../../../shared/components/Inputs/Input/input.scss'
import {useDataStore} from "../../../../store/context";
import {Button} from "../../../../shared/components/Buttons/Button/Button";

export const CartForm = () => {
    const store = useDataStore();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [addressDelivery, setAddressDelivery] = useState('');
    const goodsInCart = store.goods.getGoodsInCart;
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
            <div className="cart-form__total">
                <span>Итого: </span>
                <span className='total__price'>
                    {goodsInCart.reduce((total, product) => (
                        total + ((product.quantities ?? 1) * product.price)
                    ), 0).toLocaleString('ru-RU')} руб.
                </span>
            </div>
            <div className='cart-form__checkout'>
                <Button variant='light' className='cart-form__checkout_btn'>Оформить заказ</Button>
            </div>
        </div>
    )
}