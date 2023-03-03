function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));

// replace() 메서드를 사용한 풀이
function solution1(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}

let str1 = "BANANA";
console.log(solution1(str1));
