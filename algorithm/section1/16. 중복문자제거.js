/* 
indexOf() 메서드는 호출한 String 객체나 배열에서 주어진 값과 일치하는 값의 첫 번째 인덱스를 반환합니다. 
일치하는 값이 없으면 -1을 반환합니다.

소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
▣ 입력설명
첫 줄에 문자열이 입력됩니다.

▣ 출력설명
첫 줄에 중복문자가 제거된 문자열을 출력합니다.

▣ 입력예제 1 
ksekkset

▣ 출력예제 1 
kset
*/

// indexOf는 문자열에서 특정 문자의 위치를 찾을 때 사용
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution("ksekkset"));

//
function solution2(s) {
  let answer = "";
  for (let x of s) {
    if (answer.indexOf(x) === -1) answer += x;
    // indexOf(x) === -1은 answer에 x가 없다는 뜻
  }
  return answer;
}
console.log(solution2("ksekkset"));

//
function solution3(s) {
  let answer = "";
  for (let x of s) {
    // for of는 배열의 요소를 순회할 때 사용
    if (!answer.includes(x)) answer += x; // includes는 배열에 특정 요소가 있는지 확인할 때 사용
  }
  return answer;
}
console.log(solution3("ksekkset"));
