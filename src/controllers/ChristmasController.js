import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";

class ChristmasController {

  constructor() {

  }

  async run() {
    const date = await InputView.readDate();
    const menus = await InputView.readOrder();
    Console.print(menus);
  }
}

export default ChristmasController;