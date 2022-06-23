// firstReverse
// 문제
// 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열

// 출력
// string 타입을 리턴해야 합니다.

function firstReverse(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 순서가 뒤집힌 문자열을 리턴
    
    if(str.length === 0){ // 빈 문자열일때 빈 문자열 리턴
    return ''
    }
    let result = str[str.length-1]; // 새 문자열 할당할 result 변수 선언 
      for(let i=1; i<str.length; i++) { 
        result = result + str[str.length-1-i] // 
      }
      return result;
    }
    
    // 방법2 
    //  return str.split('').reverse().join('')