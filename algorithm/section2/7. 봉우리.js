/*
봉우리

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다.
각 자연수는 100을 넘지 않는다.

▣ 출력설명
첫 줄에 봉우리의 개수를 출력한다.

▣ 입력예제 1
5
5 3 7 2 3
3 7 1 6 1
7 2 5 3 4
4 3 6 4 1
8 7 3 5 2

▣ 출력예제 1
10
*/

function solution2(arr) {
  let answer = 0; // 봉우리의 개수
  const n = arr.length; // 격자판의 크기
  const dx = [-1, 0, 1, 0]; // 상하좌우 x좌표
  const dy = [0, 1, 0, -1]; // 상하좌우 y좌표

  for (let i = 0; i < n; i++) {
    // 행
    for (let j = 0; j < n; j++) {
      // 열
      let flag = 1; // 봉우리 여부. flag = true
      for (let k = 0; k < 4; k++) {
        // 상하좌우
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          // 상하좌우 x좌표가 격자판을 벗어나거나
          nx < 0 ||
          nx >= n ||
          // 상하좌우 y좌표가 격자판을 벗어나거나
          ny < 0 ||
          ny >= n ||
          // 상하좌우 중 봉우리가 아니거나
          arr[nx][ny] >= arr[i][j]
        ) {
          // 상하좌우 인덱스가 유효하고, 상하좌우 인덱스 값이 현재 인덱스 값보다 크거나 같으면 봉우리가 아님
          flag = 0; // flag = false
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

let arr2 = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution2(arr2)); // 10
