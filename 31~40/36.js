// quickSort
// 문제
// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 정수
// arr.length는 100,000 이하

// 출력
// number 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 배열의 요소는 오름차순으로 정렬되어야 합니다.
// arr[i] <= arr[j] (i < j)

// 주의사항
// 퀵 정렬을 구현해야 합니다.
// arr.sort 사용은 금지됩니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

// 입출력 예시
// let output = quickSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]
//-------------------------------------------//
const quickSort = function (arr) {
  
  // 퀵 정렬 단계
  // 1. 분할 : 입력 배열을 피벗을 기준으로 왼쪽, 오른쪽으로 분할
  // 2. 정복 : 부분 배열을 정렬, 그 크기가 충분히 작지 않으면 순환호출을 이용해 재분할정복
  // 3. 결합 : 정렬된 부분 배열들을 하나의 배열에 합병. 

// 배열의 길이가 1보다 작거나 같다면 리턴 
if (arr.length <= 1) return arr;

// pivot -> 첫번째 인덱스 
  const pivot = arr[0];
  const left = [];
  const right = [];

// pivot보다 값이 작으면 왼쪽 리스트, 크면 오른쪽 리스트에 push. 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  // left, pivot, right 합쳐서 리턴 
  return quickSort(left).concat(pivot, quickSort(right));
};