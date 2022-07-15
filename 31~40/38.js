// mergeSort
// 문제
// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 정수
// arr.length 100,000 이하

// 출력
// number 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 배열의 요소는 오름차순으로 정렬되어야 합니다.
// arr[i] <= arr[j] (i < j)

// 주의사항
// 병합 정렬을 구현해야 합니다.
// arr.sort 사용은 금지됩니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

// 입출력 예시
// let output = mergeSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]
//-------------------------------------------//
const mergeSort = function (arr) {
  // 병합 정렬 : 두 개의 동일한 반으로 나눈 다음 정렬된 방식으로 결합
  // 배열을 더이상 나눌 수 없을 때까지 계속해서 반으로 나누는 재귀 알고리즘
  // 배열이 비어있거나 요소가 하나라면 분할이 중지
  // 배열에 여러 요소가 있는 경우 --> 배열을 반으로 나누고 각 반에 대해 병합정렬을 재귀적으로 호출 

  // 병합함수
  const merge = function (left, right) {
    // 두 배열의 원소를 작은 것부터 담을 빈 배열 
    let merged = [];
    let leftIdx = 0, // 왼쪽 배열 인덱스
      rightIdx = 0; // 오른쪽 배열 인덱스 
      // 반복할 크기 생성 
    const size = left.length + right.length;

    // 왼쪽 배열, 오른쪽 배열 비교 
    for (let i = 0; i < size; i++) {
      if (leftIdx >= left.length) {
        merged.push(right[rightIdx]);
        rightIdx++;
      } else if (rightIdx >= right.length || left[leftIdx] <= right[rightIdx]) {
        merged.push(left[leftIdx]);
        leftIdx++;
      } else {
        merged.push(right[rightIdx]);
        rightIdx++;
      }
    }
    return merged;
  };
  
  // 재귀함수 사용 
  const mergeSort = function (arr) {
    if (arr.length < 2) return arr;
    const middle = parseInt(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    const merged = merge(left, right);
    return merged;
  };
}