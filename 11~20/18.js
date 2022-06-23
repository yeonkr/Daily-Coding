// numberSearch
// 문제
// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열

// 출력
// number 타입을 리턴해야 합니다 (0 이상의 정수)

// 주의 사항
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
// 숫자(digit)는 연속해서 등장하지 않습니다.

// 입출력 예시
// let output = numberSearch('Hello6 ');
// console.log(output); // --> 1

// output = numberSearch('Hello6 9World 2,');
// console.log(output); // --> 2

// output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
// console.log(output); // --> 2

function numberSearch(str) {
    if(str.length === 0) { return 0 }
    let sum = 0;
    let count = 0;
    for(let i =0; i<str.length; i++) {
        if(str[i] > 0 && str[i] <= 9){
        sum += parseInt(str[i])
    } else if(str[i] !== ' ') {
        count++;
    }
} return Math.round(sum / count);
}