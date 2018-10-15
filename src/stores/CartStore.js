import { observable, action, reaction, computed } from 'mobx';

export default class CartStore {
	@observable cart = observable.map()

  @action 
  add(item) {
    let val = this.cart.get(item.sku)
    if (val !== undefined) {
        this.cart.set(item.sku, {name: item.name, price: item.price, qty: val.qty+1, img: item.img})
    } else {
        this.cart.set(item.sku, {name: item.name,  price: item.price, qty: 1, img: item.img})
    }
  }

  @computed 
  get items() {
    let items = []
    for (var e of this.cart.entries()) {
      const sku = e[0]
      const item = e[1]
      items.push({sku, ...item})
    }
    return items
  }
  
  @action
  remove(sku) {
    this.cart.delete(sku)
  }
  
  @action
  update(sku, qty) {
    let val = this.cart.get(sku)
    if (val !== undefined) {
      val.qty = qty
      this.cart.set(sku, val)
    }
  }

  @computed
  get total() {
    let total = 0;
    for (var e of this.cart.entries()) {
      total += parseFloat(e[1].price) * parseInt(e[1].qty)
    }
    return total
  }


  @computed 
  get count() {
    let count = 0;
    for (var e of this.cart.entries()) {
      count += parseInt(e[1].qty)
    }
    return count
  }
}

const cartStore = new CartStore();