import React from "react";
import './product.scss'
import { IProduct } from "../../../../services/interfaces/goods";
import {enumUrls} from "./imageUrls";
import {Cart} from "../../../../ui/icons/Cart";
import {Favorite} from "../../../../ui/icons/Favorite";
import {useDataStore} from "../../../../store/context";

interface ProductProps {
    product: IProduct
}

export const Product = ({ product } :ProductProps) => {
    const store = useDataStore()
    const addToCart = (id: number) => {
        store.goods.setGoodsInCart(id)
    }
    return (
        <div className='product'>
            <img className='product__image' src={enumUrls[product.id - 1]} alt=""/>
            <div className="product__name">{product.name}</div>
            <div className="product__description">{product.description}</div>
            <div className="product__price">{product.price.toLocaleString('ru-RU')} руб</div>
            <div className='product__actions'>
                <div onClick={() => addToCart(product.id)}>
                    <Cart/>
                </div>
                <Favorite/>
            </div>
        </div>
    )
}