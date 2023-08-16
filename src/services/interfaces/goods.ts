export interface IGoods {
    goods: IProduct[]
}

export interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    date: string,
    isFavorites: boolean
}