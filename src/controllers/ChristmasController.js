import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import Order from "../models/Order.js";
import Menu from "../models/Menu.js";
import { MENU, OUTPUT_MESSAGE } from "../constants/constants.js";
import OutputView from "../views/OutputView.js";
import Calculator from "../models/Calculator.js";

class ChristmasController {

  async run() {
    const menus = new Menu(MENU);
    Console.print(OUTPUT_MESSAGE.printIntroduceMessage);

    const date = await InputView.readDate();
    const orderMenus = await InputView.readOrder();
    const orders = orderMenus.map(item => {
      return new Order(menus.getMenuItem(item.menuName), item.quantity)
    });

    Console.print(OUTPUT_MESSAGE.printReceiptMessage);
    
    const calculator = new Calculator(orders, date);
    this.printReceipt(orders, calculator);
  }

  printReceipt(orders, calculator) {
    OutputView.printMenu(orders);
    OutputView.printTotalPrice(calculator.calculateTotalPrice());
    OutputView.printGiftMenu(calculator.calculateGiftMenu());
    OutputView.printBenefit(calculator.calculateBenefit());
    OutputView.printDiscount(calculator.calculateDiscountPrice());
    OutputView.printPaymentPrice(calculator.calculatePaymentPrice());
    OutputView.printBadge(calculator.calculateBadge());
  }
}

export default ChristmasController;