import {action, computed, makeObservable, observable} from 'mobx';
import {IGoods, IProduct} from "../services/interfaces/goods";
import {getGoods} from "../services/getData";

export class GoodsStore {
  @observable allGoods: IGoods = getGoods();
  @observable goodsToCartIdArr: number[] = [];
  @observable goodsToFavoriteIdArr: number[] = [];
  @observable quantities: { [key: number]: number } = {};

  constructor() {
    makeObservable(this);
    const storedGoodsToFavoriteIdArr = localStorage.getItem('countGoodsInFavorite');
    const storedGoodsToCartIdArr = localStorage.getItem('countGoodsInCart');
    if (storedGoodsToCartIdArr) {
      this.goodsToCartIdArr = JSON.parse(storedGoodsToCartIdArr);
    }
    if (storedGoodsToFavoriteIdArr) {
      this.goodsToFavoriteIdArr = JSON.parse(storedGoodsToFavoriteIdArr);
    }
  }

  @computed
  get getGoods(): IGoods {
    localStorage.setItem('goods', JSON.stringify(this.allGoods))
    return this.allGoods
  }

  @computed
  get getGoodsInCart(): IProduct[] {
    if(!this.goodsToCartIdArr.length) {
      return [];
    }

    return this.goodsToCartIdArr.map(productId => {
      const product = this.allGoods.goods.find(product => product.id === productId);
      if (product) {
        product.quantities = this.quantities[productId] || 1;
      }
      return product;
    }).filter(Boolean) as IProduct[];
  }

  @computed
  get getGoodsInFavorite(): IProduct[] {
    if(!this.goodsToFavoriteIdArr.length) {
      return [];
    }

    return this.goodsToFavoriteIdArr.map(productId => {
      return this.allGoods.goods.find(product => product.id === productId);
    }).filter(Boolean) as IProduct[];
  }

  @action
  setProductQuantity(productId: number, newQuantity: number) {
    this.quantities[productId] = newQuantity;
  }

  @action
  setGoodsInCart(goodsId: number) {
    if(this.goodsToCartIdArr.indexOf(goodsId, 0) >= 0) {
      return this.deleteFromCartById(goodsId)
    }
    this.quantities[goodsId] = 0;
    this.goodsToCartIdArr.push(goodsId);
    localStorage.setItem('countGoodsInCart', JSON.stringify(this.goodsToCartIdArr));
  }

  @action
  setGoodsToFavorite(goodsId: number) {
    if(this.goodsToFavoriteIdArr.indexOf(goodsId, 0) >= 0) {
      return this.deleteFromFavoriteById(goodsId)
    }
    this.goodsToFavoriteIdArr.push(goodsId);
    localStorage.setItem('countGoodsInFavorite', JSON.stringify(this.goodsToFavoriteIdArr));
  }

  @action
  deleteFromCartById(id: number) {
    const deletedProduct = this.goodsToCartIdArr.filter((idProduct) => idProduct != id);
    if(deletedProduct.length < 1) {
      return this.clearCart()
    }
    this.goodsToCartIdArr = deletedProduct;
    this.quantities[id] = 1
    localStorage.setItem('countGoodsInCart', JSON.stringify(deletedProduct));
  }

  @action
  deleteFromFavoriteById(id: number) {
    const deletedProduct = this.goodsToFavoriteIdArr.filter((idProduct) => idProduct != id);
    this.goodsToFavoriteIdArr = deletedProduct;
    localStorage.setItem('countGoodsInFavorite', JSON.stringify(deletedProduct));
  }

  @action
  clearCart() {
    this.goodsToCartIdArr = [];
    this.quantities = {};
    localStorage.setItem('countGoodsInCart', JSON.stringify([]));
  }

}