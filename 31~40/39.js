// rotateMatrix
// 문제
// 2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.

// 입력
// 인자 1 : matrix
// 가로 길이(matrix[i].length)와 세로 길이(matrix.length)가 모두 N인 2차원 배열
// matrix[i][j]는 number 타입

// 출력
// 2차원 배열을 리턴해야 합니다.

// 입출력 예시
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// console.log(matrix[0][0]); // --> 1
// console.log(matrix[3][2]); // --> 15

// const rotatedMatrix = rotateMatrix(matrix);
// console.log(rotatedMatrix[0][0]); // --> 13
// console.log(rotatedMatrix[3][2]); // --> 8

// Advanced
// 세로와 가로의 길이가 각각 M, N인 2차원 M X N 배열을 시계방향으로 90도씩 K번 회전시킨 배열을 리턴해 보세요. 회전수가 두 번째 입력으로 주어집니다.
//--------------------------------------------//
const rotateMatrix = function (matrix, k=1) {
  // 90도 회전
  /* 
  [13,  9, 5, 1]
  [14, 10, 6, 2]
  [15, 11, 7, 3]
  [16, 12, 8, 4]
  13,14,15,16 각각의 배열에 넣고, 그 뒤로 9,10.... 을 넣는 이중반복문 생성
  */

  // 회전 X 
  if(matrix.length === 0) return [];

  const rotate = (matrix) => {
  let result = [];
  for(let i = 0; i < matrix[0].length; i++) {
    let array = []
    for(let j = matrix.length-1; j >= 0; j--){
      array.push(matrix[j][i])
    } 
    result.push(array) 
  }
  return result
};

// rotate 함수 k번 실행 
for(let i = 0; i < k; i++){ 
    matrix = rotate(matrix);
} return matrix
}


