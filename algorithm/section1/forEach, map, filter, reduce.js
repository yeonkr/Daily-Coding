// 배열 요소를 하나하나 탐색할 때 반복문을 사용하지 않고 forEach사용.
// 즉, 반복문 대신 사용하는 메서드.
function forEach(predicate, thisArg) {
  for (let i = 0; i < a.length; i++) {
    // 배열 요소를 탐색하며 predicate를 호출.
    predicate(a[i], i); // 배열의 요소를 첫번째로 넘기고, 인덱스는 두번째로.
  }
}
a = [10, 11, 12, 13, 14, 15];
a.forEach(
  function (v, i) {
    console.log(v, i, this);
  },
  [1, 2]
); // 이 배열이 thisArg로 넘어간다.
// thisArg는 forEach의 두번째 인자로 넘길 수 있다.

// 10 0 [ 1, 2 ]
// 11 1 [ 1, 2 ]
// 12 2 [ 1, 2 ]
// 13 3 [ 1, 2 ]
// 14 4 [ 1, 2 ]
// 15 5 [ 1, 2 ]

// forEach는 배열의 요소를 하나하나 탐색하며,
// predicate를 호출한다.
// predicate는 배열의 요소를 첫번째로 넘기고, 인덱스는 두번째로 넘긴다.

//--------------------------------------------------------------
// map
// 배열의 요소를 하나하나 탐색하며, 새로운 배열을 만들어 반환한다.
// 즉, 배열의 요소를 변형할 때 사용한다.
// map은 새로운 배열을 반환하며 원본배열과 길이가 같다.
// forEach는 반환값이 없다.
function map(predicate, thisArg) {
  let list = [];
  for (let i = 0; i < a.length; i++) {
    list.push(predicate(a[i], i));
  }
  return list;
}
a = [10, 11, 12, 13, 14, 15];
let result = a.map(function (v, i) {
  return v * v; // 배열의 요소를 제곱한 새로운 배열을 반환한다.
});
console.log(result); // [ 100, 121, 144, 169, 196, 225 ] 제곱한 값이 들어있는 배열이 반환된다.

//--------------------------------------------------------------
// filter
// 배열의 요소를 하나하나 탐색하며, 조건에 맞는 요소만 모아 새로운 배열을 만들어 반환한다.
// 즉, 배열의 요소를 걸러낼 때 사용한다.
// filter는 새로운 배열을 반환하며 원본배열과 길이가 다를 수 있다.(특정 값만 모아서 뽑아냄)
function filter(predicate, thisArg) {
  let list = [];
  for (let i = 0; i < a.length; i++) {
    // 배열의 요소를 하나하나 탐색하며
    if (predicate(a[i], i)) list.push(a[i]);
  } // predicate의 조건에 맞는 참인 요소만 모아서 a[i]를 새로운 배열에 push한다.
  return list;
}
a = [10, 11, 12, 13, 14, 15];
let answer = a.filter(function (v, i) {
  return v % 2 === 1;
});
console.log(answer); // [ 11, 13, 15 ] 홀수만 모아서 새로운 배열을 반환한다.
