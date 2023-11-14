class Order {
  #orderMenus;

  constructor(orderMenus) {
    this.#orderMenus = orderMenus;
  }

  getOrderDetails() {
    return this.#orderMenus;
  }
}

export default Order;