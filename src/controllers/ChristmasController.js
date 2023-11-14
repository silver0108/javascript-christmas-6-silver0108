import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import Menu from "../models/Menu.js";

class ChristmasController {

  constructor() {

  }

  async run() {
    const date = await InputView.readDate();
    const inputMenus = await InputView.readOrder();
    const menus = inputMenus.map(item => new Menu(item.menuName, item.quantity));
  }
}

export default ChristmasController;