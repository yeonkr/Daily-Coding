// readVertically
// 문제
// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열

// 출력
// string 타입을 리턴해야 합니다.

// 주의 사항
// 각 문자열의 길이는 다양합니다.
// 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.

function readVertically(arr) {
    // TODO: 여기에 코드를 작성합니다.

    // 문자열의 인덱스 값을 저장할 변수를 선언
    // newStr보다 길이가 긴 배열의 요소가 있다면 그게 newStr이 된다.
    let newStr = '';    
    for(let i=0; i< arr.length; i++){
        if(newStr < arr[i].length){ 
        newStr = arr[i].length;
    }
}   
// 외부 for문은 두 번째 요소를, 내부 for문은 첫 번째 요소를 순회
let result = '';
for(let i = 0; i < newStr; i++) {
    for(let j = 0; j < arr.length; j++) {
        // arr[j][i] 값이 undefined일 경우 continue 
        if(arr[j][i] === undefined) {
            continue
        }
        result = result + arr[j][i] 
    }
}
return result
}