class MenuItem {
  #name;
  #category;
  #price;

  constructor(name, category, price) {
    this.#name = name;
    this.#category = category;
    this.#price = price;
  }
}

export default MenuItem;