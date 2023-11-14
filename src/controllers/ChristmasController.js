import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import Order from "../models/Order.js";
import Menu from "../models/Menu.js";
import { MENU } from "../constants/constants.js";

class ChristmasController {

  async run() {
    const menus = new Menu(MENU);

    const date = await InputView.readDate();
    const orderMenus = new Order(await InputView.readOrder());
  }
}

export default ChristmasController;