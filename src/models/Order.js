import Vaildator from "../vaildator/vaildator.js";
import { Console } from "@woowacourse/mission-utils";

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