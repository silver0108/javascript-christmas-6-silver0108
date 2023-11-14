import { MENU } from "../constants/constants.js";

const getCategory = (menuname) => {
  for (const category in MENU) {
    for(const menuItem in MENU[category])
      if (MENU[category][menuItem].name === menuname) {
        return category;
      }
  }
}

export default getCategory;