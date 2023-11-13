import { Console } from "@woowacourse/mission-utils";

class Vaildator {
  static isNumber(num) {
    if (!Number.isInteger(num)) {
      throw new Error("[ERROR]");
    }
  }

  static isNumberInRange(num) {
    if(num < 1 || num > 31){
      throw new Error("[ERROR] 1~31");
    }
  }
}

export default Vaildator;