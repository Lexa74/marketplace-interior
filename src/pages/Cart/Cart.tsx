import React from "react";
import {Header} from "../../shared/components/Header/Header";
import {useDataStore} from "../../store/context";
import './cart.scss'
import {useObserver} from "mobx-react";
import {CartGoods} from "./components/CartGoods/CartGoods";
import {CartForm} from "./components/CartForm/CartForm";
import {EmptyDataComponent} from "../../shared/components/EmptyDataComponent/EmptyDataComponent";

export const Cart = () => {
    const store = useDataStore()

    return useObserver(() => {
        const goodsInCart = store.goods.getGoodsInCart;
        return (
            <>
                <Header/>
                <div className='wrapper'>
                    {goodsInCart.length ? (
                        <div className='cart'>
                            <div className="cart-wrapper">
                                <CartGoods goodsInCart={goodsInCart}/>
                                <CartForm/>
                            </div>
                        </div>
                    ) : (<EmptyDataComponent caption='Ваша корзина пуста' buttonLink='/' buttonName='В каталог'/>)}
                </div>

            </>
        )
    })
}