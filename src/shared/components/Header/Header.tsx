import React from "react";
import './header.scss'
import logo from '../../../ui/images/logo.svg'
import {Link} from "react-router-dom";
import {useObserver} from "mobx-react";
import {useDataStore} from "../../../store/context";
import {useWindowWidth} from "../../customHooks/useWindowWidth";
import {CatalogIcon} from "../../../ui/icons/CatalogIcon/CatalogIcon";
import {CartIcon} from "../../../ui/icons/CartIcon/CartIcon";
import {Favorite} from "../../../ui/icons/Favorite/Favorite";

export const Header = () => {
    const store = useDataStore();
    const windowWidth = useWindowWidth();

    return useObserver(() => {
        const goodsToCartIdArr = store.goods.goodsToCartIdArr;
        const goodsToFavoriteIdArr = store.goods.goodsToFavoriteIdArr;
        return (
            <header>
                <Link to='/' className="logo"><img src={logo} alt=""/></Link>
                <nav>
                    {windowWidth > 475 ? (
                        <>
                            <Link to='/'>Каталог</Link>
                            <Link to='/cart' className='cart-nav'>
                                Корзина <span className='count'>{goodsToCartIdArr.length}</span>
                            </Link>
                            <Link to='/favorite' className='favorite-nav'>
                                Избранное <span className='count'>{goodsToFavoriteIdArr.length}</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to='/'><CatalogIcon/></Link>
                            <Link to='/cart' className='cart-nav'>
                                <CartIcon/>
                                <span className='count'>{goodsToCartIdArr.length}</span>
                            </Link>
                            <Link to='/favorite' className='favorite-nav'>
                                <Favorite/>
                                <span className='count'>{goodsToFavoriteIdArr.length}</span>
                            </Link>
                        </>
                    )}
                </nav>
            </header>
        )

    })
}