import Vaildator from "./InputVaildator.js";

const OrderVaildator = (orderMenus) => {
  Vaildator.isDuplicate(orderMenus); // 중복되는 메뉴가 있는 지

  orderMenus.forEach((item) => {
      Vaildator.isMenuInMenuList(item.menuName); // 메뉴판에 있는 메뉴인지
      Vaildator.isNumber(Number(item.quantity)) || Vaildator.isGreaterThanOne(item.quantity); // 메뉴 개수가 1 이상의 숫자인지
  });

  Vaildator.isBerverage(orderMenus); // 주문 메뉴가 모두 음료인지
  Vaildator.isQuantityExceeded(orderMenus);
}

export default OrderVaildator;