import { Console } from "@woowacourse/mission-utils";
import Vaildator from "../vaildator/vaildator.js";

const InputView = {
    async readDate() {
        try {
            const date = Number(await Console.readLineAsync());
            
            Vaildator.isNumber(date); // 숫자인지
            Vaildator.isNumberInRange(date); // 1 ~ 31 범위인지

            return date;
        } 
        catch(error){
            Console.print(error.message);
            return await this.readDate();
        }
        
    }
}

export default InputView;