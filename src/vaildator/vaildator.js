import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../constants/error.js";

class Vaildator {
  static isNumber(num) {
    if (!Number.isInteger(num)) {
      throw new Error(ERROR_MESSAGE.notValidDate);
    }
  }

  static isNumberInRange(num) {
    if(num < 1 || num > 31){
      throw new Error(ERROR_MESSAGE.notValidDate);
    }
  }

  static isVaildOrderForm(item) {
    const pattern = /^[a-zA-Z\s]+-\d+$/;
    if(!pattern.test(item)) {
      throw new Error(ERROR_MESSAGE.notVaildOrder);
    }
  }
}

export default Vaildator;