// firstCharacter
// 문제
// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 알파벳 문자열

// 출력
// string 타입을 리턴해야 합니다.

// 주의 사항
// 단어는 공백 한 칸으로 구분합니다.
// 연속된 공백은 없다고 가정합니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 각 단어의 첫 글자로 이루어진 문자열 리턴
  
    let biggin = str.split(' ') // 띄어쓰기로 구분
    let result = ''
      if(str.length === 0){ // 빈 문자열일때 빈 문자열 리턴
      return ''
    }
    for(i=0; i<biggin.length; i++){
      result = result + biggin[i][0] // 첫글자를 뽑아서 이어붙임 
    }
    return result 
  }

