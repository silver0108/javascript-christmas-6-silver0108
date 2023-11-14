import MenuItem from "./MenuItem.js";
import { Console } from "@woowacourse/mission-utils";
class Menu {
  #menuList;

  constructor(menuList) {
    this.#menuList = [];
    for (const category in menuList) {
      for (const menuItem in menuList[category]) {
        this.#menuList.push(new MenuItem(menuList[category][menuItem].name, 
          category, menuList[category][menuItem].price));
      } 
    }
  }

  getMenuItem(menuName){
    return this.#menuList.find(menuItem => menuItem.getName() === menuName);
  }
}

export default Menu;