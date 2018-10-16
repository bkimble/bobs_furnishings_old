import { observable, action, computed } from 'mobx';

export default class CartStore {
  @observable cart = observable.map()

  @action
  add(item) {
      const val = this.cart.get(item.sku);
      if (val !== undefined) {
          this.cart.set(item.sku, {name: item.name, price: item.price, qty: parseInt(val.qty, 10) +1, img: item.img});
      } else {
          this.cart.set(item.sku, {name: item.name,  price: item.price, qty: 1, img: item.img});
      }
  }

  @computed
  get items() {
      const items = [];
      for (const e of this.cart.entries()) {
          const sku = e[0];
          const item = e[1];
          items.push({sku, ...item});
      }
      return items;
  }

  @action
  remove(sku) {
      this.cart.delete(sku);
  }

  @action
  update(sku, qty) {
      const val = this.cart.get(sku);
      if (val !== undefined) {
          val.qty = qty;
          this.cart.set(sku, val);
      }
  }

  @computed
  get total() {
      let total = 0;
      for (const e of this.cart.entries()) {
          total += parseFloat(e[1].price) * parseInt(e[1].qty, 10);
      }
      return total;
  }


  @computed
  get count() {
      let count = 0;
      for (const e of this.cart.entries()) {
          count += parseInt(e[1].qty, 10);
      }
      return count;
  }
}

