/*
N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다. 
같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 
즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

▣ 출력설명
입력된 순서대로 등수를 출력한다.

▣ 입력예제 1
5
87 89 92 100 76

▣ 출력예제 1 
4 3 2 1 5
*/
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let cnt = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) cnt++;
    }
    answer.push(cnt);
  }
  return answer;
}
console.log(solution([87, 89, 92, 100, 76])); // 4 3 2 1 5

function solution2(arr) {
  let answer = Array.from({ length: arr.length }, () => 1);
  // Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만듭니다.
  // Array.from(arrayLike[, mapFn[, thisArg]])
  // arrayLike: 배열로 변환할 유사 배열 객체나 반복 가능한 객체.
  // mapFn (Optional): 배열의 모든 요소에 대해 호출할 맵핑 함수.
  // thisArg (Optional): mapFn 실행 시에 this로 사용할 값.
  // Array.from({ length: arr.length }, () => 1)는 배열의 길이가 arr.length인 배열을 만들고, 그 배열의 모든 요소를 1로 초기화한다
  // Array.from({ length: arr.length }, () => 1)은 [1, 1, 1, 1, 1]과 같다.
  for (let i = 0; i < arr.length; i++) {
    // i = 0, 1, 2, 3, 4
    for (let j = 0; j < arr.length; j++) {
      // j = 0, 1, 2, 3, 4
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}
console.log(solution2([87, 89, 92, 100, 76])); // 4 3 2 1 5
