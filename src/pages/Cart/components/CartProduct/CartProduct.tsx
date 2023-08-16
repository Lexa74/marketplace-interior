import React from "react";
import './cart-product.scss'
import {IProduct} from "../../../../services/interfaces/goods";
import {enumUrls} from "../../../Main/components/Product/imageUrls";

interface CartProductProps {
    productInCart: IProduct
}

export const CartProduct = ({productInCart}: CartProductProps) => {
    return (
        <div className='product-in-cart'>
            <div className="product-in-cart-wrapper">
                <img className='product-in-cart__preview' src={enumUrls[productInCart.id - 1]} alt=""/>
                <div className="product-in-cart__product-information">
                    <div className="product-information__name">
                        {productInCart.name}
                    </div>
                    <div className="product-information__description">
                        {productInCart.description}
                    </div>
                    <div className="product-information__price">
                        {productInCart.price.toLocaleString('ru-RU')} руб.
                    </div>
                    <div className="product-information__actions">
                        <span>Избранные</span>
                        <span>Удалить</span>
                    </div>
                </div>
            </div>
            <div className="product-in-cart__counter">
                
            </div>
        </div>
    )
}