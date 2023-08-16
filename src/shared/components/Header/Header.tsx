import React from "react";
import './header.scss'
import logo from '../../../ui/images/logo.svg'
import {Link} from "react-router-dom";
import {useObserver} from "mobx-react";
import {useDataStore} from "../../../store/context";

export const Header = () => {
    const store = useDataStore();
    const arrIdGoodsInCart = store.goods.getGoodsInCartId;

    return useObserver(() => (
        <header>
            <Link to='/' className="logo"><img src={logo} alt=""/></Link>
            <nav>
                <Link to='/'>Каталог</Link>
                <Link to='/cart' className='cart-button'>Корзина <span className='cart-button__count'>{arrIdGoodsInCart.length}</span></Link>
            </nav>
        </header>
    ))
}