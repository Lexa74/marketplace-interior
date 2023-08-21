import React, {useState} from "react";
import './product.scss'
import { IProduct } from "../../../../services/interfaces/goods";
import {enumUrls} from "./imageUrls";
import {Cart} from "../../../../ui/icons/Cart/Cart";
import {Favorite} from "../../../../ui/icons/Favorite/Favorite";
import {useDataStore} from "../../../../store/context";

interface ProductProps {
    product: IProduct
}

export const Product = ({ product } :ProductProps) => {
    const store = useDataStore()
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const onToggleAddToCart = (id: number) => {
        store.goods.setGoodsInCart(id)
        setIsAddedToCart(!isAddedToCart)
    }
    return (
        <div className='product'>
            <img className='product__image' src={enumUrls[product.id - 1]} alt=""/>
            <div className="product__name">{product.name}</div>
            <div className="product__description">{product.description}</div>
            <div className="product__price">{product.price.toLocaleString('ru-RU')} руб.</div>
            <div className='product__actions'>
                <div className='actions__add-to-cart' onClick={() => onToggleAddToCart(product.id)}>
                    <Cart toggleActive={isAddedToCart}/>
                </div>
                <Favorite/>
            </div>
        </div>
    )
}