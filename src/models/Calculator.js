import { Console } from "@woowacourse/mission-utils";

class Calculator {
  #orders;
  #toalQuantity;
  #totalPrice;

  constructor(orders) {
    this.#orders = orders;
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
}

export default Calculator;