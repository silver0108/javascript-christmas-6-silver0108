export const INPUT_MESSAGE = {
  inputDate: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  inputOrder: "주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n"
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

export const MENU = {
  APPETIZER: {
    MUSHROOM_SOUP: { name: "양송이수프", price: 6000 },
    TAPAS: { name: "타파스", price: 5500 },
    CAESAR_SALAD: { name: "시저샐러드", price: 8000 }
  },
  MAIN: {
      T_BONE_STEAK: { name: "티본스테이크", price: 55000 },
      BBQ_RIBS: { name: "바비큐립", price: 54000 },
      SEAFOOD_PASTA: { name: "해산물파스타", price: 35000 },
      CHRISTMAS_PASTA: { name: "크리스마스파스타", price: 25000 }
  },
  DESSERT: {
      CHOCO_CAKE: { name: "초코케이크", price: 15000 },
      ICE_CREAM: { name: "아이스크림", price: 5000 }
  },
  BEVERAGE: {
      ZERO_COLA: { name: "제로콜라", price: 3000 },
      RED_WINE: { name: "레드와인", price: 60000 },
      CHAMPAGNE: { name: "샴페인", price: 25000 }
  }
}

export const BENEFITS = {
  CHRISTMAS_DISCOUNT: "크리스마스 디데이 할인",
  WEEKDAY_DISCOUNT: "평일 할인",
  SPECIAL_DISCOUNT: "특별 할인",
  GIFT_EVENT: "증정 이벤트"
}

export const STAR_DAY = [3, 10, 17, 24, 25, 31];

export const BADGE = {
  STAR: "별",
  TREE: "트리",
  SANTA: "산타"
}

Object.freeze(INPUT_MESSAGE);
Object.freeze(OUTPUT_MESSAGE);
Object.freeze(MENU);
Object.freeze(BENEFITS);
Object.freeze(BADGE);