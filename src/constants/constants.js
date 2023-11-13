export const INPUT_MESSAGE = {
  inputDate: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  intputOrder: "주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n"
};

export const OUTPUT_MESSAGE = {
  printOrderMenuMessage: "<주문 메뉴>",
  printOrderMenu: (menu, cnt) => `${menu} ${cnt}개`,
  printTotalAmountTitle: "<할인 전 총주문 금액>",
  printGiftMenuTitle: "<증정 메뉴>",
  printBenefitDetailsTitle: "<혜택 내역>",
  printBenefitAmountTitle: "<총혜택 금액>",
  printDiscountAmountTitle: "<할인 후 예상 결제 금액>",
  printEventBadgeTitle: "<12월 이벤트 배지>",
  printAmount: (amount) => `${amount}원`,
  printGiftMenu: "샴페인 1개",
  printNotExist: "없음"
};

export const BENEFITS = {
  CHRISTMAS_DISCOUNT: "크리스마스 디데이 할인",
  WEEKDAY_DISCOUNT: "평일 할인",
  SPECIAL_DISCOUNT: "특별 할인",
  GIFT_EVENT: "증정 이벤트"
}

export const BADGE = {
  STAR: "별",
  TREE: "트리",
  SANTA: "산타"
}