/*
호이스팅
호이스팅은 변수의 유효범위인 스코프와 함수의 실행 순서와 관련이 있다.

변수 호이스팅
변수 호이스팅은 변수를 선언하기 전에 변수를 참조할 수 있는 현상을 말한다.
*/

// var 키워드로 선언한 변수는 undefined로 초기화된다.
// let, const 키워드로 선언한 변수는 초기화 단계에서 TDZ(Temporal Dead Zone)에 빠진다.
console.log(a); // undefined
var a = 0;
console.log(a); // 0

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 0;
console.log(b); // 0

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 0;
console.log(c); // 0

//--------------------------------------------------------------
