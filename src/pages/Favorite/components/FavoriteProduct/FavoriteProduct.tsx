import React, {useState} from "react";
import {IProduct} from "../../../../services/interfaces/goods";
import {enumUrls} from "../../../Main/components/Product/imageUrls";
import './favorite-product.scss'
import {useDataStore} from "../../../../store/context";
import {Favorite} from "../../../../ui/icons/Favorite/Favorite";

interface FavoriteProductProps {
    product: IProduct
}

export const FavoriteProduct = ({product}: FavoriteProductProps) => {
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
        <div className='favorite-product'>
            <div className="favorite-product-wrapper">
                <img className='favorite-product__preview' src={enumUrls[product.id - 1]} alt=""/>
                <div className="favorite-product__product-information">
                    <div className="product-information__name">
                        {product.name}
                    </div>
                    <div className="product-information__description">
                        {product.description}
                    </div>
                    <div className="product-information__price">
                        {product.price.toLocaleString('ru-RU')} руб.
                    </div>
                </div>
            </div>
            <div className="favorite-product__actions">
                <span onClick={() => onToggleAddToCart(product.id)}>{isAddedToCart ? 'Удалить из корзины' : 'Добавить в корзину'}</span>
                <div onClick={() => onToggleAddToFavorite(product.id)}><Favorite toggleActive={isAddedToFavorite} /></div>
            </div>
        </div>
    )
}