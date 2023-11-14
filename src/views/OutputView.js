import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants.js";

const OutputView = {
    printMenu(orderMenus) {
        Console.print(OUTPUT_MESSAGE.printOrderMenuMessage);
        orderMenus.forEach(menu => {
            Console.print(OUTPUT_MESSAGE.printOrderMenu(
                menu.getOrderMenu().getName(), menu.getMenuQuantity()))});
    }
}

export default OutputView;