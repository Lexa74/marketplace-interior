import React from "react";
import './cart-product.scss'
import {IProduct} from "../../../../services/interfaces/goods";
import {enumUrls} from "../../../Main/components/Product/imageUrls";
import {Counter} from "../../../../shared/components/Counter/Counter";
import {useDataStore} from "../../../../store/context";
import {Link} from "react-router-dom";

interface CartProductProps {
    productInCart: IProduct
}

export const CartProduct = ({productInCart}: CartProductProps) => {
    const store = useDataStore()
    const deleteFromCart = (id: number) => {
        store.goods.deleteFromCartById(id)
    }
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
                        <Link to='/favorite'><span>Избранные</span></Link>
                        <span onClick={() => deleteFromCart(productInCart.id)}>Удалить</span>
                    </div>
                </div>
            </div>
            <div className="product-in-cart__counter">
                <Counter productId={productInCart.id} min={1} max={5}/>
            </div>
        </div>
    )
}