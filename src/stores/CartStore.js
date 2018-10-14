
class CartStore {
	@observable cart = [];

  add(item) {
    this.cart.push(item)
  }

  @computed count() {
    return this.cart.length
  }
}

const cartStore = new CartStore();