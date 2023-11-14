import { Console } from "@woowacourse/mission-utils";
import Vaildator from "../vaildator/vaildator.js";
import { INPUT_MESSAGE } from "../constants/constants.js";
import parseOrderDetails from "../utils/ParseOrderDetails.js";

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
            // 주문 형식에 맞는지
            orderDetails.trim().split(',').forEach(Vaildator.isVaildOrderForm);
            // 주문 메뉴 분리
            const menus = parseOrderDetails(orderDetails); 
            // 메뉴판에 있는 메뉴인지
            menus.forEach((item) => Vaildator.isMenuInMenuList(item.menuName));

            return menus;
        }
        catch(error){
            Console.print(error.message);
            return await this.readOrder();
        }
    }
}

export default InputView;