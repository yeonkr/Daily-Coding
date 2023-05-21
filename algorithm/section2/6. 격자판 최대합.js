/* 
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.

▣ 출력설명 
최대합을 출력합니다.

▣ 입력예제 1
5
10 13 10 12 15 
12 39 30 23 11 
11 25 50 53 15 
19 27 29 37 27 
19 13 30 13 19

▣ 출력예제 1 
155
*/

function solution(arr) {
  const n = arr.length;
  let maxSum = 0;

  // 각 행과 열의 합 계산
  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }
    maxSum = Math.max(maxSum, rowSum, colSum);
  }

  // 첫 번째 대각선의 합 계산
  let diagSum1 = 0;
  for (let i = 0; i < n; i++) {
    diagSum1 += arr[i][i];
  }
  maxSum = Math.max(maxSum, diagSum1);

  // 두 번째 대각선의 합 계산
  let diagSum2 = 0;
  for (let i = 0; i < n; i++) {
    diagSum2 += arr[i][n - 1 - i];
  }
  maxSum = Math.max(maxSum, diagSum2);

  return maxSum;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr)); // 155

// 강의
function solution2(arr) {
  let answer = Number.MIN_SAFE_INTEGER,
    n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // 행의 합
      sum2 += arr[j][i]; // 열의 합
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i]; // 첫 번째 대각선의 합
    sum2 += arr[i][n - i - 1]; // 두 번째 대각선의 합
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}
console.log(solution2(arr)); // 155
