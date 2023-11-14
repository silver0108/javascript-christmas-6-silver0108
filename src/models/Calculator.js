import isWeekend from "../utils/IsWeekend.js";
import { STAR_DAY } from "../constants/constants.js";

class Calculator {
  #orders;
  #date;
  #totalPrice=0;
  #christmasDiscount=0;
  #weekdayDiscount=0;
  #weekendDiscount = 0;
  #specialDiscount = 0;
  #giftDiscount = 0;
  #discountPrice = 0;
  #paymentPrice = 0;

  constructor(orders, date) {
    this.#orders = orders;
    this.#date = date;
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
      return [this.calculateChristmasDday(), this.calculateWeekday(), this.calculateWeekend(),
        this.calculateSpecial(), this.calculateGiftEvent()]
    }
    return false;
  }

  calculateChristmasDday() {
    if(this.#date >= 1 && this.#date <=25) {
      this.#christmasDiscount = -(1000 + (this.#date - 1) * 100); 
      return this.#christmasDiscount;
    }
    return false;
  }

  calculateWeekday() {
    let discount = 0;
    if(!isWeekend(this.#date)) {
      for(const order of this.#orders) {
        const menu = order.getOrderMenu();
        if(menu.getCategory() === "DESSERT") {
          discount += 2023 * order.getMenuQuantity(); 
        }
      }
      this.#weekdayDiscount = -discount;
      return this.#weekdayDiscount;
    }
    return false;
  }

  calculateWeekend() {
    let discount = 0;
    if(isWeekend(this.#date)) {
      for(const order of this.#orders) {
        const menu = order.getOrderMenu();
        if(menu.getCategory() === "MAIN") {
          discount += 2023 * order.getMenuQuantity(); 
        }
      }
      this.#weekendDiscount = -discount;
      return this.#weekendDiscount;
    }
    return false;
  }

  calculateSpecial() {
    if(STAR_DAY.includes(this.#date)) {
      this.#specialDiscount = -1000;
      return this.#specialDiscount;
    }
    return false;
  }

  calculateGiftEvent() {
    if(this.calculateGiftMenu()) {
      this.#giftDiscount = -25000;
      return this.#giftDiscount;
    }
    return false;
  }

  calculateDiscountPrice() {
    this.#discountPrice = this.#christmasDiscount + this.#weekdayDiscount + 
      this.#weekendDiscount + this.#specialDiscount + this.#giftDiscount;
    return this.#discountPrice;
  }

  calculatePaymentPrice() {
    this.#paymentPrice = this.#totalPrice + this.#discountPrice - this.#giftDiscount;
    return this.#paymentPrice;
  }

  calculateBadge() {
    if(-this.#discountPrice >= 20000) {
      return "SANTA";
    }else if(-this.#discountPrice >= 10000) {
      return "TREE";
    }else if(-this.#discountPrice >= 5000) {
      return "STAR"
    }
    return false;
  }

}

export default Calculator;