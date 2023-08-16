import { GoodsStore } from './goods';

export function createStore() {
  return {
    goods: new GoodsStore()
  };
}
export type Store = ReturnType<typeof createStore>;
