// isIsogram
// 문제
// 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 없는 알파벳 문자열

// 출력
// boolean 타입을 리턴해야 합니다.

// 주의 사항
// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
// 대소문자는 구별하지 않습니다.

function isIsogram(str) {
    // 빈 문자열을 입력받은 경우 true
    if(str.length === 0) { 
        return true
    }
    // 소문자로 통일 
    let newStr = str.toLowerCase()
    for(let i = 0; i<newStr.length; i++) {
        for(let j=i+1; j<newStr.length; j++) {
        // newStr[i], newStr[j] 값이 중복되면 false 
        if(newStr[i] === newStr[j]) {
            return false
        } 
    }
} return true 
}
