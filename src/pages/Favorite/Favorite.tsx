import React from "react";
import {Header} from "../../shared/components/Header/Header";
import {useObserver} from "mobx-react";
import {useDataStore} from "../../store/context";
import {FavoriteProduct} from "./components/FavoriteProduct/FavoriteProduct";
import {EmptyDataComponent} from "../../shared/components/EmptyDataComponent/EmptyDataComponent";
import {Button} from "../../shared/components/Buttons/Button/Button";
import './favorite.scss'
import {Link} from "react-router-dom";

export const Favorite = () => {
    const store = useDataStore();
    const goodsInFavorite = store.goods.getGoodsInFavorite;

    return useObserver(() => {
        return (
            <>
                <Header/>
                <div className="wrapper">
                    {goodsInFavorite.length ? (
                        <>
                            <div className="favorite-container wrapper">
                                {goodsInFavorite.map((product) => (
                                    <FavoriteProduct product={product} key={product.id} />
                                ))}
                            </div>
                            <Link to='/'><Button variant='dark'>Перейти в каталог</Button></Link>
                        </>
                    ) : <EmptyDataComponent caption='Здесь совсем пусто(' buttonName='К покупкам' buttonLink='/'/>}
                </div>
            </>
        )
    })
}