import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../constants/error.js";
import { MENU } from "../constants/constants.js";
import Menu from "../models/Menu.js";
import getCategory from "../utils/GetCategory.js";

class Vaildator {
  static isNumber(num) {
    if (!Number.isInteger(num)) {
      throw new Error(ERROR_MESSAGE.notVaildNumber);
    }
  }

  static isNumberInRange(num) {
    if(num < 1 || num > 31){
      throw new Error(ERROR_MESSAGE.notValidDate);
    }
  }

  static isGreaterThanOne(num){
    if(num < 1){
      throw new Error(ERROR_MESSAGE.notVaildOrder);
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
        if (MENU[category][menuItem].name === name) {
          return true;
        }
      } 
    }
    throw new Error(ERROR_MESSAGE.notVaildOrder);
  }

  static isDuplicate(menus) {
    const uniqueMenuNames = new Set(menus.map(item => item.menuName));

    if (uniqueMenuNames.size !== menus.length) {
      throw new Error(ERROR_MESSAGE.isDuplicateMenu);
    }
  }

  static isBerverage(menus) {
    if (menus.every(menu => getCategory(menu.menuName) === "BEVERAGE")) {
      throw new Error(ERROR_MESSAGE.onlyBeverage);
    }
  }
}

export default Vaildator;