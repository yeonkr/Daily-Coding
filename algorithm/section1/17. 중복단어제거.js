/*
N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(3<=N<=30)
두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.

▣ 입력예제 1 
5
good
time
good 
time 
student

▣ 출력예제 1 
good
time
student
*/
function solution(s) {
  let answer = [];
  for (let x of s) {
    if (!answer.includes(x)) answer.push(x);
  }
  return answer;
}
console.log(solution(["good", "time", "good", "time", "student"]));

// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
function solution2(s) {
  let answer = s.filter((v, i) => {
    // console.log(v, i, s.indexOf(v));
    // v는 배열의 요소, i는 배열의 인덱스
    // indexOf()는 배열의 요소 중에서 특정 요소의 인덱스를 찾을 때 사용
    // indexOf()는 배열의 첫 번째 요소부터 찾기 때문에 v가 배열의 첫 번째 요소일 때만 i와 같은 값이 나옴
    return s.indexOf(v) === i;
  });
  return answer;
}
console.log(solution2(["good", "time", "good", "time", "student"]));

// Set 객체는 값의 집합을 나타내며, 각 값은 최대 한 번만 나타납니다.
// Set 객체는 값의 순서를 유지하며, 각 값은 유일합니다.
// Set 객체는 어떤 타입의 값이든 유일한 값을 저장할 수 있습니다.
// Set 객체는 새로운 요소를 추가할 때마다 Set 객체의 크기를 반환합니다.
function solution3(s) {
  let answer = Array.from(new Set(s)); // Set 객체를 배열로 변환
  // Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만듭니다.
  // Set 객체는 반복 가능한 객체(iterable object)이므로 Array.from() 메서드를 사용해 배열로 변환할 수 있습니다.
  // Set 객체는 중복된 값을 허용하지 않으므로 중복된 값을 제거할 수 있습니다.
  // Set 객체는 순서가 없으므로 순서를 유지하려면 배열로 변환해야 합니다.
  return answer;
}
console.log(solution3(["good", "time", "good", "time", "student"]));
