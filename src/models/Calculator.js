import { Console } from "@woowacourse/mission-utils";
import isWeekend from "../utils/IsWeekend.js";

class Calculator {
  #orders;
  #date;
  #toalQuantity;
  #totalPrice=0;
  #weekdayDiscount=0;

  constructor(orders, date) {
    this.#orders = orders;
    this.#date = date;
    this.calculateTotalPrice();
    this.calculateGiftMenu();
    this.calculateBenefit();
  }

  calculateTotalPrice() {
    this.#totalPrice = this.#orders.reduce((total, order) => 
      total + Number(order.getOrderMenu().getPrice() * order.getMenuQuantity()), 0);
    return this.#totalPrice;
  }

  calculateGiftMenu() {
    if(this.#totalPrice >= 120000) {
      return true;
    }
    return false;
  }

  calculateBenefit() {
    if(this.#totalPrice >= 10000){
      this.calculateChristmasDday();
      this.calculateWeekday();
    }
  }

  calculateChristmasDday() {
    if(this.#date >= 1 && this.#date <=25) {
      return -(1000 + (this.#date - 1) * 100); 
    }
    return false;
  }

  calculateWeekday() {
    if(!isWeekend(this.#date)) {
      for(const order of this.#orders) {
        const menu = order.getOrderMenu();
        if(menu.getCategory() === "DESSERT") {
          this.#weekdayDiscount += 2023 * order.getMenuQuantity(); 
          return -this.#weekdayDiscount;
        }
      }
    }
    return false;
  }
}

export default Calculator;