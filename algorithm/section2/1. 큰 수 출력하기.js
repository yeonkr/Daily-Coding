/*
N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)

▣ 입력설명
첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.

▣ 출력설명
자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.

▣ 입력예제 1 
6
7 3 9 5 6 12

▣ 출력예제 1 
7 9 6 12
*/

function solution(arr) {
  let answer = [];
  answer.push(arr[0]); // 첫 번째 수는 무조건 출력
  for (let i = 1; i < arr.length; i++) {
    // 두 번째 수부터 반복
    if (arr[i] > arr[i - 1]) answer.push(arr[i]); // 자신의 바로 앞 수보다 큰 수만 출력
    // if (arr[i] > Math.max(...answer)) answer.push(arr[i]); // 자신의 바로 앞 수보다 큰 수만 출력
    // Math.max() 함수는 0개 이상의 인수를 받고, 인수 중 가장 큰 값을 반환합니다.
  }
  return answer;
}
console.log(solution([7, 3, 9, 5, 6, 12]));

function solution2(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) answer.push(arr[i]); // 첫 번째 수는 무조건 출력
    else if (arr[i] > arr[i - 1]) answer.push(arr[i]); // 자신의 바로 앞 수보다 큰 수만 출력
    // else if (arr[i] > answer[answer.length - 1]) answer.push(arr[i]); // 자신의 바로 앞 수보다 큰 수만 출력
  }
  return answer;
}
console.log(solution2([7, 3, 9, 5, 6, 12]));
