import { action, computed, makeObservable, observable } from 'mobx';
import {IGoods, IProduct} from "../services/interfaces/goods";
import {getGoods} from "../services/getData";

export class GoodsStore {
  @observable allGoods: IGoods = getGoods();
  @observable goodsIdArr: number[] = [];
  @observable goodsInCart: IProduct[] = [];
  @observable quantities: any = {};

  constructor() {
    makeObservable(this);
    const storedGoodsIdArr = localStorage.getItem('countGoodsInCart');
    if (storedGoodsIdArr) {
      this.goodsIdArr = JSON.parse(storedGoodsIdArr);
    }
  }

  @computed
  get getGoods(): IGoods {
    localStorage.setItem('goods', JSON.stringify(this.allGoods))
    return this.allGoods
  }
  @computed
  get getGoodsInCartId(): number[] {
    return this.goodsIdArr
  }
  @computed
  get getGoodsInCart(): IProduct[] {
    if(!this.goodsIdArr.length) {
      return [];
    }
    return this.goodsIdArr.map(productId =>
        this.allGoods.goods.find(product => product.id === productId)
    ).filter(Boolean) as IProduct[];
  }
  // @computed get totalCost() {
  //   let total = 0;
  //   for (let productId in this.quantities) {
  //     const product = this.allGoods.goods.find(product => product.id === Number(productId));
  //     if (product) {
  //       total += product.price * this.quantities[productId];
  //     }
  //   }
  //   return total;
  // }

  @action
  setGoodsInCart(goodsId: number) {
    this.goodsIdArr.push(goodsId)
    const newSet = new Set(this.goodsIdArr);
    localStorage.setItem('countGoodsInCart', JSON.stringify(Array.from(newSet)));
    this.goodsIdArr = Array.from(newSet);
  }
  @action
  clearCart() {
    this.goodsIdArr = []
    localStorage.setItem('countGoodsInCart', JSON.stringify([]));
  }
}
