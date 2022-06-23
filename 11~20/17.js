// computeSquareRoot
// 문제
// 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 2)

// 출력
// number 타입을 리턴해야 합니다.
// 최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)

// 주의 사항
// Math.sqrt 사용은 금지됩니다.

function computeSquareRoot(num) {
    // 123.4567.toFixed(2);  // "123.46" 
    // Xn = 1/2(Xn-1 + 2 / Xn-1)
    
    let result = 1;
    for(let i = 0; i < num; i++) {
        result = (result +  num / result) / 2 
    } return + result.toFixed(2);
}