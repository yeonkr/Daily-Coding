/* 
스코프
스코프는 변수의 유효범위를 나타낸다.
스코프는 함수 단위로 설정된다.
함수 내부에서 선언된 변수는 함수 내부에서만 유효하다
함수 외부에서 선언된 변수는 함수 내부에서 사용할 수 있다.

스코프는 함수를 호출할 때 생성된다.
함수를 호출할 때마다 스코프가 생성되고 함수 실행이 끝나면 스코프가 소멸한다.
스코프가 소멸되면 스코프에 선언된 변수도 소멸된다.
스코프는 함수를 호출할 때마다 생성되고 소멸되기 때문에 함수 외부에서는 함수 내부의 변수를 사용할 수 없다.
 */

function scope() {
  var a = 0;
  console.log(a);
}

scope();
// console.log(a); // ReferenceError: a is not defined

//--------------------------------------------------------------
function scope2() {
  var a = 0;
  console.log(a);
  return a;
}

scope2();
// console.log(a); // ReferenceError: a is not defined

//--------------------------------------------------------------

function scope3() {
  var a = 0;
  console.log(a);
  return a;
}

var result = scope3();
console.log(result); // 0

//--------------------------------------------------------------

function scope4() {
  var a = 0;
  console.log(a);
  return a;
}

var result = scope4();
console.log(result); // 0

// 함수 외부에서 함수 내부의 변수를 사용하려면 return 키워드를 사용해야 한다.
// return 키워드는 함수를 종료하고 함수 외부로 값을 반환한다.
// return 키워드 뒤에 오는 값을 함수 외부로 반환한다.
