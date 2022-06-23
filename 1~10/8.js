// convertDoubleSpaceToSingle
// 문제
// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열

// 출력
// string 타입의 문자열

// 주의 사항
// 두 칸을 초과하는 공백은 존재하지 않는다고 가정합니다.

function convertDoubleSpaceToSingle(str) {
    // TODO: 여기에 코드를 작성합니다.

    // result 변수를 선언하고
    // 반복문으로 조회
    // 공백이 있는 문자열이 있다면
    // 결과값에 문자열을 추가하고 
    // 리턴한다 
    let result = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ' && str[i+1] === ' ') {
        } else {
            result = result + str[i];
        }
    }
    return result;
}