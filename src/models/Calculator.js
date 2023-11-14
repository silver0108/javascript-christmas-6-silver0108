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
}

export default Calculator;