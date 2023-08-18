import React from "react";
import {CartProduct} from "../CartProduct/CartProduct";
import {IProduct} from "../../../../services/interfaces/goods";
import './cart-goods.scss'
import {Button} from "../../../../shared/components/Buttons/Button/Button";
import {Link} from "react-router-dom";
import {useDataStore} from "../../../../store/context";

interface CartGoodsProps {
    goodsInCart: IProduct[]
}

export const CartGoods = ({goodsInCart}: CartGoodsProps) => {
    const store = useDataStore();

    const onClearCart = () => {
        store.goods.clearCart()
    }

    return (
        <div className="cart-goods">
            <div className="cart-goods__header">
                <span>Товар</span>
                <span>К-во</span>
            </div>
            <div className="cart-goods__items">
                {goodsInCart.map((productInCart) => (
                    <CartProduct key={productInCart.id} productInCart={productInCart}/>
                ))}
            </div>
            <div className="cart-goods__actions">
                <div onClick={onClearCart}>
                    <Button variant="light">Очистить корзину</Button>
                </div>
                <Link to='/'><Button variant="dark">Продолжить покупки</Button></Link>
            </div>
        </div>
    )
}