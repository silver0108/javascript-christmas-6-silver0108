import { Console } from "@woowacourse/mission-utils";

class Calculator {
  #orders;
  #date;
  #toalQuantity;
  #totalPrice;

  constructor(orders, date) {
    this.#orders = orders;
    this.#date = date;
  }

  calculateTotalPrice() {
    const totalPrice = this.#orders.reduce((total, order) => 
      total + Number(order.getOrderMenu().getPrice() * order.getMenuQuantity()), 0);
    
    return totalPrice;
  }

  calculateGiftMenu() {
    if(this.#totalPrice >= 120000) {
      return true;
    }
    return false;
  }

  calculateChristmasDday() {
    if(this.#date >= 1 && this.#date <=25) {
      return -(1000 + (this.#date - 1) * 100); 
    }
    return false;
  }
}

export default Calculator;