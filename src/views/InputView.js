import { Console } from "@woowacourse/mission-utils";
import Vaildator from "../vaildator/InputVaildator.js";
import { INPUT_MESSAGE } from "../constants/constants.js";
import parseOrderDetails from "../utils/ParseOrderDetails.js";
import OrderVaildator from "../vaildator/OrderVaildator.js";

const InputView = {
    async readDate() {
        try {
            const date = Number(await Console.readLineAsync(INPUT_MESSAGE.inputDate));
            Vaildator.isNumber(date); // 숫자인지
            Vaildator.isNumberInRange(date); // 1 ~ 31 범위인지

            return date;
        } 
        catch(error){
            Console.print(error.message);
            return await this.readDate();
        }
    },

    async readOrder() {
        try {
            const orderDetails = await Console.readLineAsync(INPUT_MESSAGE.inputOrder);
            orderDetails.trim().split(',').forEach(Vaildator.isVaildOrderForm); // 메뉴 형식에 맞는지
            
            const orderMenus = parseOrderDetails(orderDetails); // 주문 메뉴 분리
            OrderVaildator(orderMenus);

            return orderMenus;
        }
        catch(error){
            Console.print(error.message);
            return await this.readOrder();
        }
    }
}

export default InputView;