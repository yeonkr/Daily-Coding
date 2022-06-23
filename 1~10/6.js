// letterCapitalize
// 문제
// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 알파벳 문자열

// 출력
// string 타입을 리턴해야 합니다.

// 주의 사항
// 단어는 공백으로 구분합니다.
// 연속된 공백이 존재할 수 있습니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function letterCapitalize(str) {
    // TODO: 여기에 코드를 작성합니다.

    let result = str.split(' '); // 띄어쓰기로 구분
    if(str.length === 0) {
        return ''; // 빈 문자열일 때 빈 문자열 리턴
    } for(let i = 0; i < result.length; i++) {
        if(result[i].length >0) {
            result[i] = result[i][0].toUpperCase() + result[i].slice(1);
            // 첫번째 배열의 첫번째 요소를 대문자로 만든 후 slice로 붙임 
        }
    }
    str = result.join(' ');
    return str;
    }