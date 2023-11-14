// 평일, 주말 판별
const isWeekend = (date) => {
  const currentYear = new Date().getFullYear();
  const inputDate = new Date(currentYear, 11, date); // 12월은 11을 나타냄
  const day = inputDate.getDay();

  return day === 5 || day === 6;
}

export default isWeekend;