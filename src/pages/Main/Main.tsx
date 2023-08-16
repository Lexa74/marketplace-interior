import React, {useState} from "react";
import { Header } from "../../shared/components/Header/Header";
import './main.scss'
import { IGoods } from "../../services/interfaces/goods";
import {Product} from "./components/Product/Product";
import {useSortedToValue} from "../../shared/customHooks/useSortedToValue";
import {CustomSelectBox} from "./components/CustomSelectBox/CustomSelectBox";
import {useDataStore} from "../../store/context";

export const Main = () => {
    const store = useDataStore();
    const [selectSorted, setSelectSorted] = useState('Порядок: сперва новые');
    const dataSortedToPrice: IGoods = store.goods.getGoods;
    useSortedToValue(dataSortedToPrice, selectSorted)

    return (
        <>
            <Header/>
            <h1 className='caption'>Каталог</h1>
            <div className="wrapper-select">
                <CustomSelectBox onSelect={(selectSorted) => setSelectSorted(selectSorted)} selectSorted={selectSorted}/>
            </div>
            <div className="goods">
                {dataSortedToPrice.goods.map((product) => (
                    <Product product={product} key={product.id}/>
                ))}
            </div>
        </>
    )
}