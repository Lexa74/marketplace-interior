import { action, computed, makeObservable, observable } from 'mobx';

export class GoodsStore {
  @observable goodsIdArr: number[] = [];

  constructor() {
    makeObservable(this);
    const storedGoodsIdArr = localStorage.getItem('countGoodsInCart');
    if (storedGoodsIdArr) {
      this.goodsIdArr = JSON.parse(storedGoodsIdArr);
    }
  }
  @computed
  get getGoodsInCart(): number[] {
    return this.goodsIdArr
  }

  @action
  setGoodsInCart(goodsId: number) {
    this.goodsIdArr.push(goodsId)
    const newSet = new Set(this.goodsIdArr);
    localStorage.setItem('countGoodsInCart', JSON.stringify(Array.from(newSet)));
    this.goodsIdArr = Array.from(newSet);
  }
}
