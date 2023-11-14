class Order {
  #orderMenu;
  #quantity;

  constructor(orderMenu, quantity) {
    this.#orderMenu = orderMenu;
    this.#quantity = quantity;
  }

  getOrderMenu() {
    return this.#orderMenu;
  }

  getMenuQuantity () {
    return this.#quantity;
  }
}

export default Order;