import React from "react";
import {CartProduct} from "../CartProduct/CartProduct";
import {IProduct} from "../../../../services/interfaces/goods";
import './cart-goods.scss'

interface CartGoodsProps {
    goodsInCart: IProduct[]
}

export const CartGoods = ({goodsInCart}: CartGoodsProps) => {
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
        </div>
    )
}