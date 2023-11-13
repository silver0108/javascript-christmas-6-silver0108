import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
    async readDate() {
        const date = await MissionUtils.Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)");
        
        return date;
    }
}

export default InputView;