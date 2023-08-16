import {IGoods} from "./interfaces/goods";
import database from "./database.json";

export const getGoods = () => {
    const dataGoods: IGoods = database;
    localStorage.setItem('goods', JSON.stringify(dataGoods))
    return dataGoods
}