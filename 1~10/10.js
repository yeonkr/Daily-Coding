// insertDash
// 문제
// 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 숫자 문자열

// 출력
// string 타입을 리턴해야 합니다.

// 주의 사항
// 0은 짝수로 간주합니다.

function insertDash(str) {
     // TODO: 여기에 코드를 작성합니다.

    // 배열로 바꾸고 배열의 값을 담음
    const arr = str.split('')
    const result = [] 

    for(let i=0; i<str.length; i++) {
        // 배열을 하나씩 담음
        result.push(arr[i]);
        // 현재 어레이가 홀수고, 그 다음 어레이가 홀수라면 '-'를 넣는다.
        if(arr[i] % 2 === 1 && arr[i +1] % 2 === 1) {
            result.push('-')
        }
    }
    // 스트링 타입으로 리턴. join으로 묶어 스트링으로 변환
    return result.join('');
}