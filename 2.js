// computeWhenDouble
// 문제
// 연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

// 입력
// 인자 1 : interestRate
// number 타입의 연이율 (%)
// 출력
// number 타입을 리턴해야 합니다.

function computeWhenDouble(interestRate) {
    // TODO: 여기에 코드를 작성합니다.
    // 특정 인덱스의 조건 없음 = while문 
    let rate = interestRate/100;
    let money = 1;
    let year = 0;
    while (money <2) {
        money = money * (rate + 1)
        year++
    }
    return year;
}