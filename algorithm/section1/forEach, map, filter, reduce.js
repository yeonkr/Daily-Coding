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

//--------------------------------------------------------------
// reduce
// 배열의 요소를 하나하나 탐색하며, 누적값을 만들어 반환한다.
// 즉, 배열의 요소를 하나하나 누적할 때 사용한다.
// reduce는 누적값을 반환하며 원본배열과 길이가 같다.
// reduce는 누적값을 만들어 반환한다.
// 누적값은 누산기(accumulator)라고 부른다.
// 누산기는 누적값을 저장하는 변수이다.
// 누산기는 초기값을 설정할 수 있다.
// 누산기는 누적값을 만들어 반환한다.
// 누산기는 배열의 요소를 하나하나 탐색하며, 누산기에 누적값을 만들어 반환한다.

function reduce(predicate, val) {
  let acc = val;
  for (let i = 0; i < a.length; i++) {
    acc = predicate(acc, a[i]);
  }
  return acc;
}

a = [10, 11, 12, 13, 14, 15];
let sum = a.reduce(function (acc, v) {
  // 누산기는 acc, 배열의 요소는 v
  return acc + v;
}, 0); // 누산기는 0으로 초기화한다.
console.log(sum); // 75
// 누산기는 0 + 10 = 10
//  10 + 11 = 21
//  21 + 12 = 33
//  33 + 13 = 46
//  46 + 14 = 60
//  60 + 15 = 75
//  75를 반환한다.

//--------------------------------------------------------------
// find
// 배열의 요소를 하나하나 탐색하며, 조건에 맞는 요소를 찾아 반환한다.
// 즉, 배열의 요소를 찾을 때 사용한다.
// find는 찾은 요소를 반환하며 원본배열과 길이가 같다.
// find는 찾은 요소를 반환한다.
// find는 배열의 요소를 하나하나 탐색하며, 조건에 맞는 요소를 찾아 반환한다.
function find(predicate, thisArg) {
  for (let i = 0; i < a.length; i++) {
    if (predicate(a[i], i)) return a[i];
  }
}
a = [10, 11, 12, 13, 14, 15];
let res = a.find(function (v, i) {
  return v === 13;
});
console.log(res); // 13

//--------------------------------------------------------------
// findIndex
// 배열의 요소를 하나하나 탐색하며, 조건에 맞는 요소의 인덱스를 찾아 반환한다.
// 즉, 배열의 요소의 인덱스를 찾을 때 사용한다.
// findIndex는 찾은 요소의 인덱스를 반환하며 원본배열과 길이가 같다.
// findIndex는 찾은 요소의 인덱스를 반환한다.
// findIndex는 배열의 요소를 하나하나 탐색하며, 조건에 맞는 요소의 인덱스를 찾아 반환한다.
function findIndex(predicate, thisArg) {
  for (let i = 0; i < a.length; i++) {
    if (predicate(a[i], i)) return i;
  }
}
a = [10, 11, 12, 13, 14, 15];
let ans = a.findIndex(function (v, i) {
  return v === 13;
});
console.log(ans); // 3

//--------------------------------------------------------------
// some
// 배열의 요소를 하나하나 탐색하며, 조건에 맞는 요소가 있는지 확인한다.
// 즉, 배열의 요소가 조건에 맞는지 확인할 때 사용한다.
// some은 조건에 맞는 요소가 있으면 true를 반환하며 원본배열과 길이가 같다.
// some은 조건에 맞는 요소가 있으면 true를 반환한다.
// some은 배열의 요소를 하나하나 탐색하며, 조건에 맞는 요소가 있는지 확인한다.
function some(predicate, thisArg) {
  for (let i = 0; i < a.length; i++) {
    if (predicate(a[i], i)) return true;
  }
  return false;
}

a = [10, 11, 12, 13, 14, 15];
let answer1 = a.some(function (v, i) {
  return v === 13;
});
console.log(answer1); // true

//--------------------------------------------------------------
// every
// 배열의 요소를 탐색하며 모든 요소가 조건에 맞는지 확인한다.
// 즉, 배열의 모든 요소가 조건에 맞는지 확인할 때 사용한다.
// every은 모든 요소가 조건에 맞으면 true를 반환하며 원본배열과 길이가 같다.
function every(predicate, thisArg) {
  for (let i = 0; i < a.length; i++) {
    if (!predicate(a[i], i)) return false;
  }
  return true;
}

a = [10, 11, 12, 13, 14, 15];
let answer2 = a.every(function (v, i) {
  return v % 2 === 0;
});
console.log(answer2); // false

//--------------------------------------------------------------
// includes
// 배열의 요소를 하나하나 탐색하며 요소가 있는지 확인한다.
// 즉, 배열의 요소가 있는지 확인할 때 사용한다.
// includes는 요소가 있으면 true를 반환하며 원본배열과 길이가 같다.
function includes(val) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === val) return true;
  }
  return false;
}

a = [10, 11, 12, 13, 14, 15];
let answer3 = a.includes(13);
console.log(answer3); // true

//--------------------------------------------------------------
// indexOf
// 배열의 요소를 하나하나 탐색하며 요소의 인덱스를 찾아 반환한다.
// 즉, 배열의 요소의 인덱스를 찾을 때 사용한다.
// indexOf는 요소의 인덱스를 반환하며 원본배열과 길이가 같다.
function indexOf(val) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === val) return i;
  }
  return -1;
}

a = [10, 11, 12, 13, 14, 15];
let answer4 = a.indexOf(13);
console.log(answer4); // 3

//--------------------------------------------------------------
// lastIndexOf
// 배열의 요소를 뒤에서부터 하나하나 탐색하며 요소의 인덱스를 찾아 반환한다.
// 즉, 배열의 요소의 인덱스를 찾을 때 사용한다.
// lastIndexOf는 요소의 인덱스를 반환하며 원본배열과 길이가 같다.
function lastIndexOf(val) {
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === val) return i;
  }
  return -1;
}

a = [10, 11, 12, 13, 14, 15];
let answer5 = a.lastIndexOf(13);
console.log(answer5); // 3

//--------------------------------------------------------------
// fill
// 배열의 요소를 하나하나 탐색하며 요소를 채운다.
// 즉, 배열의 요소를 채울 때 사용한다.
// fill은 채운 요소를 반환하며 원본배열과 길이가 같다.
function fill(val, start, end) {
  start = start || 0;
  end = end || a.length;
  for (let i = start; i < end; i++) {
    a[i] = val;
  }
  return a;
}

a = [10, 11, 12, 13, 14, 15];
let answer6 = a.fill(0);
console.log(answer6); // [0, 0, 0, 0, 0, 0]

//--------------------------------------------------------------
// copyWithin
// 배열의 요소를 하나하나 탐색하며 요소를 복사한다.
// 즉, 배열의 요소를 복사할 때 사용한다.
// copyWithin은 복사한 요소를 반환하며 원본배열과 길이가 같다.
function copyWithin(target, start, end) {
  start = start || 0;
  end = end || a.length;
  for (let i = start; i < end; i++) {
    a[target++] = a[i];
  }
  return a;
}

a = [10, 11, 12, 13, 14, 15];
let answer7 = a.copyWithin(0, 3);
console.log(answer7); // [13, 14, 15, 13, 14, 15]

//--------------------------------------------------------------
// reverse
// 배열의 요소를 하나하나 탐색하며 요소를 뒤집는다.
// 즉, 배열의 요소를 뒤집을 때 사용한다.
// reverse은 뒤집은 요소를 반환하며 원본배열과 길이가 같다.
function reverse() {
  let temp;
  for (let i = 0; i < a.length / 2; i++) {
    temp = a[i];
    a[i] = a[a.length - 1 - i];
    a[a.length - 1 - i] = temp;
  }
  return a;
}

a = [10, 11, 12, 13, 14, 15];
let answer8 = a.reverse();
console.log(answer8); // [15, 14, 13, 12, 11, 10]

//--------------------------------------------------------------
// sort
// 배열의 요소를 하나하나 탐색하며 요소를 정렬한다.
// 즉, 배열의 요소를 정렬할 때 사용한다.
// sort은 정렬한 요소를 반환하며 원본배열과 길이가 같다.
function sort(compare) {
  compare = compare || ((a, b) => a - b);
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (compare(a[i], a[j]) > 0) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}

a = [10, 11, 12, 13, 14, 15];
let answer9 = a.sort((a, b) => b - a);
console.log(answer9); // [15, 14, 13, 12, 11, 10]

//--------------------------------------------------------------
// concat
// 배열의 요소를 하나하나 탐색하며 요소를 연결한다.
// 즉, 배열의 요소를 연결할 때 사용한다.
// concat은 연결한 요소를 반환하며 원본배열과 길이가 다르다.
function concat(...args) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i]);
  }
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j++) {
        result.push(args[i][j]);
      }
    } else {
      result.push(args[i]);
    }
  }
  return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer10 = a.concat(16, 17, [18, 19]);
console.log(answer10); // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
