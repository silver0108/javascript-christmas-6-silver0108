import { Console } from "@woowacourse/mission-utils";

class Vaildator {
  static isNumber(num) {
    if (!Number.isInteger(num)) {
      throw new Error("[ERROR]");
    }
    
  }
}

export default Vaildator;