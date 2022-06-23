// compressString
// 문제
// 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 알파벳 문자열

// 출력
// string 타입을 리턴해야 합니다.

// 주의 사항
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 3개 이상 연속되는 문자만 압축합니다.

function compressString(str) {
    // 같은 문자 반복횟수
    let count = 1;
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
      // 현재 문자와 그 다음 문자가 연속된다면 count++ 
    if(str[i] === str[i + 1]){
        count += 1;
        // 아니라면 count가 3이상인지 확인 --> true일 경우 
    } else if(count >= 3) {
        newStr += count + str[i]
        count = 1;
        // false일 경우 
    } else {
        for(let j = 1; j <= count; j++){
        newStr += str[i];
    } count = 1; 
    }
} return newStr;   
}