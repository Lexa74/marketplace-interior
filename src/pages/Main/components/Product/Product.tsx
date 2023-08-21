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
    const goodsInCartId = store.goods.goodsToCartIdArr;
    const goodsInFavoriteId = store.goods.goodsToFavoriteIdArr;
    const [isAddedToCart, setIsAddedToCart] = useState(goodsInCartId.indexOf(product.id, 0) >= 0);
    const [isAddedToFavorite, setIsAddedToFavorite] = useState(goodsInFavoriteId.indexOf(product.id, 0) >= 0);

    const onToggleAddToCart = (id: number) => {
        store.goods.setGoodsInCart(id)
        setIsAddedToCart(!isAddedToCart)
    }
    const onToggleAddToFavorite = (id: number) => {
        store.goods.setGoodsToFavorite(id)
        setIsAddedToFavorite(!isAddedToFavorite)
    }
    return (
        <div className='product'>
            <img className='product__image' src={enumUrls[product.id - 1]} alt=""/>
            <div className="product__name">{product.name}</div>
            <div className="product__description">{product.description}</div>
            <div className="product__price">{product.price.toLocaleString('ru-RU')} руб.</div>
            <div className='product__actions'>
                <div className='product__actions_btn' onClick={() => onToggleAddToCart(product.id)}>
                    <Cart toggleActive={isAddedToCart}/>
                </div>
                <div className="product__actions_btn" onClick={() => onToggleAddToFavorite(product.id)}>
                    <Favorite toggleActive={isAddedToFavorite}/>
                </div>
            </div>
        </div>
    )
}