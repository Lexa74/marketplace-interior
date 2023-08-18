import React from "react";
import {Header} from "../../shared/components/Header/Header";
import {useDataStore} from "../../store/context";
import './cart.scss'
import {Button} from "../../shared/components/Buttons/Button/Button";
import {useObserver} from "mobx-react";
import {Link} from "react-router-dom";
import {CartGoods} from "./components/CartGoods/CartGoods";
import {CartForm} from "./components/CartForm/CartForm";

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
                    ) : (
                        <div className='cart-empty'>
                            <div>
                                <p className='cart-empty__info'>Ваша корзина пуста</p>
                                <Link to='/'><Button variant="dark">В каталог</Button></Link>
                            </div>
                        </div>
                    )}
                </div>

            </>
        )
    })
}