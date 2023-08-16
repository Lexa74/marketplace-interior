import {IGoods} from "../../services/interfaces/goods";

export const useSortedToValue = (array: IGoods, sortOption: string) => {
    if(sortOption === 'Порядок: сперва дешевле') {
        array.goods.sort((a, b) => {
            if (a.price < b.price) {
                return -1;
            }
            return 0;
        });
    }

    if(sortOption === 'Порядок: сперва дороже') {
        array.goods.sort((a, b) => {
            if (a.price > b.price) {
                return -1;
            }
            return 0;
        });
    }
    if(sortOption === 'Порядок: сперва новые') {
        array.goods.sort((a, b) => {
            if (a.date < b.date) {
                return -1;
            }
            return 0;
        });
    }
}