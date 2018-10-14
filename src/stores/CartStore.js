import { observable, action, reaction, computed } from 'mobx';

export default class CartStore {
	@observable cart = [];

  @action 
  add(item) {
    this.cart.push(item)
  }

  @computed 
  get items() {
    return this.cart
  }

  @computed 
  get count() {
   return this.cart.length
  }
}

const cartStore = new CartStore();