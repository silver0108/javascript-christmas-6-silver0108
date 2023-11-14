class MenuItem {
  #name;
  #category;
  #price;

  constructor(name, category, price) {
    this.#name = name;
    this.#category = category;
    this.#price = price;
  }
  getName() {
    return this.#name;
  }
  getPrice() {
    return this.#price;
  }
}

export default MenuItem;