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
