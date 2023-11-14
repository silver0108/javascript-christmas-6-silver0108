import { Console } from "@woowacourse/mission-utils";
import { BADGE, BENEFITS, OUTPUT_MESSAGE } from "../constants/constants.js";

const OutputView = {
    printMenu(orderMenus) {
        Console.print(OUTPUT_MESSAGE.printOrderMenuMessage);
        orderMenus.forEach(menu => {
            Console.print(OUTPUT_MESSAGE.printOrderMenu(
                menu.getOrderMenu().getName(), menu.getMenuQuantity()))});
    },
    printTotalPrice(result) {
        Console.print(OUTPUT_MESSAGE.printTotalAmountTitle);
        Console.print(OUTPUT_MESSAGE.printAmount(result.toLocaleString('ko-KR')));
    },
    printGiftMenu(result) {
        Console.print(OUTPUT_MESSAGE.printGiftMenuTitle);
        if(result === false) Console.print(OUTPUT_MESSAGE.printNotExist);
        else Console.print(OUTPUT_MESSAGE.printGiftMenu);
    },
    printBenefit(results) {
        Console.print(OUTPUT_MESSAGE.printBenefitDetailsTitle);
        if(results === false) Console.print(OUTPUT_MESSAGE.printNotExist);
        else {
            for(let i=0; i<results.length; i++){
                if(results[i]) {
                    Console.print(`${BENEFITS[i]}: ${OUTPUT_MESSAGE.printAmount(results[i].toLocaleString('ko-KR'))}`);
                } else {
                    continue;
                }
            } 
        }
    },
    printDiscount(result) {
        Console.print(OUTPUT_MESSAGE.printBenefitAmountTitle);
        Console.print(OUTPUT_MESSAGE.printAmount(result.toLocaleString('ko-KR')));
    },
    printPaymentPrice(result) {
        Console.print(OUTPUT_MESSAGE.printDiscountAmountTitle);
        Console.print(OUTPUT_MESSAGE.printAmount(result.toLocaleString('ko-KR')));
    },
    printBadge(result) {
        Console.print(OUTPUT_MESSAGE.printEventBadgeTitle);
        if(result === false) Console.print(OUTPUT_MESSAGE.printNotExist);
        else Console.print(BADGE[result]);
    }
}

export default OutputView;