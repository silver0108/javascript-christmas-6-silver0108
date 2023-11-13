import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";

class ChristmasController {

  constructor() {

  }

  async run() {
    const date = await InputView.readDate();
    Console.print(date);
  }
}

export default ChristmasController;