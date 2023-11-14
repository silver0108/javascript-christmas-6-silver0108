import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import Order from "../models/Order.js";
import Menu from "../models/Menu.js";
import { MENU } from "../constants/constants.js";
import OutputView from "../views/OutputView.js";

class ChristmasController {

  async run() {
    const menus = new Menu(MENU);

    const date = await InputView.readDate();
    const orderMenus = await InputView.readOrder();
    const orders = orderMenus.map(item => {
      return new Order(menus.getMenuItem(item.menuName), item.quantity)
    });

    OutputView.printMenu(orders);
    
  }
}

export default ChristmasController;