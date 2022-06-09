// removeExtremes
// 문제
// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// arr[i].length는 20 이하

// 출력
// 배열을 리턴해야 합니다.

// 주의 사항
// 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
// 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.

function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 가장 길고, 짧은 길이의 문자열의 인덱스 값을 저장할 변수
    let maxLth = 0;    
    let minLth = 0;    

    //가장 길고, 짧은 길이의 문자열 저장
    for(let i=0; i< arr.length; i++){
        if(arr[i].length >= arr[maxLth].length){
            maxLth = i;
        }if(arr[i].length <= arr[minLth].length){
            minLth = i;
        }
    }
    // 빈 배열 생성
    let result = []; 
    for(let i = 0; i < arr.length; i++){
        //for문에서 저장한 문자열의 인덱스 값을 제외한 후 
        if(i !== minLth && i !== maxLth){ 
            result.push(arr[i]);
        }
    }
    // result에 넣어준다.
    return result; 
}