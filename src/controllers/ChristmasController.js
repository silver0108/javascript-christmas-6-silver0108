import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import Order from "../models/Order.js";
import Menu from "../models/Menu.js";
import { MENU } from "../constants/constants.js";

class ChristmasController {

  async run() {
    const menus = new Menu(MENU);

    const date = await InputView.readDate();
    const orderMenus = await InputView.readOrder();
    const orders = orderMenus.map(item => {
      return new Order(menus.getMenuData().find(menuItem => menuItem.getName() === item.menuName), item.quantity)
    });
    // for(const order of orders){
    //   Console.print(order.getOrderDetails().getName());
    //   Console.print(order.getMenuQuantity());
    // }
  }
}

export default ChristmasController;