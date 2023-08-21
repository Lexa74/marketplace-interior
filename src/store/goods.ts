import {action, computed, makeObservable, observable} from 'mobx';
import {IGoods, IProduct} from "../services/interfaces/goods";
import {getGoods} from "../services/getData";

export class GoodsStore {
  @observable allGoods: IGoods = getGoods();
  @observable goodsIdArr: number[] = [];
  @observable quantities: { [key: number]: number } = {};

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

    return this.goodsIdArr.map(productId => {
      const product = this.allGoods.goods.find(product => product.id === productId);
      if (product) {
        product.quantities = this.quantities[productId] || 1;
      }
      return product;
    }).filter(Boolean) as IProduct[];
  }

  @action
  setProductQuantity(productId: number, newQuantity: number) {
    this.quantities[productId] = newQuantity;
  }

  @action
  setGoodsInCart(goodsId: number) {
    if(this.goodsIdArr.indexOf(goodsId, 0) >= 0) {
      return this.deleteFromCartById(goodsId)
    }
    console.log(this.quantities[goodsId])
    this.quantities[goodsId] = 0;
    this.goodsIdArr.push(goodsId);
    localStorage.setItem('countGoodsInCart', JSON.stringify(this.goodsIdArr));
  }

  @action
  deleteFromCartById(id: number) {
    const deletedProduct = this.goodsIdArr.filter((idProduct) => idProduct != id);
    if(deletedProduct.length < 1) {
      return this.clearCart()
    }
    this.goodsIdArr = deletedProduct;
    this.quantities[id] = 1
    localStorage.setItem('countGoodsInCart', JSON.stringify(deletedProduct));
  }

  @action
  clearCart() {
    this.goodsIdArr = [];
    this.quantities = {};
    localStorage.setItem('countGoodsInCart', JSON.stringify([]));
  }
}