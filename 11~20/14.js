// superIncreasing
// 문제
// 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 수를 요소로 갖는 배열
// arr[i]는 정수

// 출력
// boolean 타입을 리턴해야 합니다.
// arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.

function superIncreasing(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let sum = arr[0];
    // for문을 이용해 인덱스를 순서대로 더한다 
    for(let i = 1; i<arr.length; i++) {
        sum += arr[i]
        // 만약 sum이 다음 인덱스보다 크거나 같다면 false
        if(sum >= arr[i+1]) {
            return false
        } 
    } 
    return true
}
