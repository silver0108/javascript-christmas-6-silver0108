import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import Order from "../models/Order.js";

class ChristmasController {

  async run() {
    const date = await InputView.readDate();
    const orderMenus = new Order(await InputView.readOrder());
  }
}

export default ChristmasController;