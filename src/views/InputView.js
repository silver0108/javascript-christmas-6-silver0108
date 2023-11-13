import { Console } from "@woowacourse/mission-utils";
import Vaildator from "../vaildator/vaildator.js";

const InputView = {
    async readDate() {
        try {
            const date = Number(await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)"));
            
            Vaildator.isNumber(date);
            
            
            return date;
        } 
        catch(error){
            Console.print(error);
            return await this.readDate();
        }
        
    }
}

export default InputView;