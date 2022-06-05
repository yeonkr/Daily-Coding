// ABCheck
// 문제
// 문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.
// 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
// 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열

// 입력
// 인자 1 : str
// string 타입의 알파벳 문자열

// 출력
// boolean 타입을 리턴해야 합니다.

// 주의 사항
// 대소문자를 구분하지 않습니다.
// 공백도 한 글자로 취급합니다.
// 'a'와 'b'는 중복해서 등장할 수 있습니다.

function ABCheck(str) {
    // code goes here

    // 모든 문자열을 소문자로 변경 
    str = str.toLowerCase();

    for(let i=0; i<str.length; i++) {
      // 길이가 5일 경우에 넘김
    if(str.length === 5){
        continue
        }
      // 첫번째 요소가 a, 마지막 요소가 b면 true 또는 첫번째 요소가 b, 마지막 요소가 a면 true 
    if((str[i] === 'a' && str[i + 4] === 'b') || (str[i] === 'b' && str[i + 4] === 'a')){
        return true;
    }
    }
    // 그게 아닌 경우 false
    return false;
  }