function solution(s, t) {
  // s: 문자열, t: 찾을 문자
  let answer = 0; // t의 개수를 저장할 변수
  for (let x of s) {
    // s의 각 문자를 x에 저장
    if (x === t) answer++; // x가 t와 같으면 answer에 1을 더함
  }
  return answer;
}
let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// 다른 풀이
function solution2(s, t) {
  let answer = s.split(t).length; // t를 기준으로 문자열을 나누고, 나눈 문자열의 개수를 answer에 저장
  return answer - 1; // t를 기준으로 나누었기 때문에 t의 개수보다 1이 더 많으므로 1을 빼줌
}
let str2 = "COMPUTERPROGRAMMING";
console.log(solution2(str2, "R"));
