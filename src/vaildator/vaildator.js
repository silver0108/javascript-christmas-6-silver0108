import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../constants/error.js";
import { MENU } from "../constants/constants.js";

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
    const pattern = /^[a-zA-Z가-힣\s]+-\d+$/;
    if(!pattern.test(item)) {
      throw new Error(ERROR_MESSAGE.notVaildOrder);
    }
  }

  static isMenuInMenuList(name) {
    for (const category in MENU) {
      for (const menuItem in MENU[category]) {
        if (!MENU[category][menuItem].name === name) {
          throw new Error(ERROR_MESSAGE.notVaildOrder);
        }
      } 
    }
  }
}

export default Vaildator;