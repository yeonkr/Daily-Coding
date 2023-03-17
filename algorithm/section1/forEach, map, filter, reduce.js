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

//--------------------------------------------------------------
// slice
// 배열의 요소를 하나하나 탐색하며 요소를 잘라낸다.
// 즉, 배열의 요소를 잘라낼 때 사용한다.
// slice은 잘라낸 요소를 반환하며 원본배열과 길이가 다르다.
function slice(start, end) {
  start = start || 0;
  end = end || a.length;
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(a[i]);
  }
  return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer11 = a.slice(3, 5);
console.log(answer11); // [13, 14]

//--------------------------------------------------------------
// splice
// 배열의 요소를 하나하나 탐색하며 요소를 삭제하거나 추가한다.
// 즉, 배열의 요소를 삭제하거나 추가할 때 사용한다.
// splice은 삭제하거나 추가한 요소를 반환하며 원본배열과 길이가 다르다.
function splice(start, deleteCount, ...args) {
  start = start || 0;
  deleteCount = deleteCount || a.length;
  let result = [];
  for (let i = 0; i < start; i++) {
    result.push(a[i]);
  }
  for (let i = 0; i < args.length; i++) {
    result.push(args[i]);
  }
  for (let i = start + deleteCount; i < a.length; i++) {
    result.push(a[i]);
  }
  return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer12 = a.splice(3, 2, 16, 17);
console.log(answer12); // [13, 14]

//--------------------------------------------------------------
// indexOf
// 배열의 요소를 하나하나 탐색하며 요소를 찾는다.
// 즉, 배열의 요소를 찾을 때 사용한다.
// indexOf는 찾은 요소의 인덱스를 반환하며 원본배열과 길이가 같다.
function indexOf(searchElement, fromIndex) {
  fromIndex = fromIndex || 0;
  for (let i = fromIndex; i < a.length; i++) {
    if (a[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

a = [10, 11, 12, 13, 14, 15];
let answer13 = a.indexOf(13);
console.log(answer13); // 3

//--------------------------------------------------------------
// toString
// 배열의 요소를 하나하나 탐색하며 요소를 문자열로 변환한다.
// 즉, 배열의 요소를 문자열로 변환할 때 사용한다.
// toString은 변환한 요소를 반환하며 원본배열과 길이가 같다.
function toString() {
  let result = "";
  for (let i = 0; i < a.length; i++) {
    result += a[i] + ",";
  }
  return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer14 = a.toString();
console.log(answer14); // 10,11,12,13,14,15

//--------------------------------------------------------------
// join
// 배열의 요소를 하나하나 탐색하며 요소를 문자열로 변환한다.
// 즉, 배열의 요소를 문자열로 변환할 때 사용한다.
// join은 변환한 요소를 반환하며 원본배열과 길이가 같다.
function join(separator) {
  separator = separator || ",";
  let result = "";
  for (let i = 0; i < a.length; i++) {
    result += a[i] + separator;
  }
  return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer15 = a.join("-");
console.log(answer15); // 10-11-12-13-14-15

//--------------------------------------------------------------
// reduceRight
// 배열의 요소를 하나하나 탐색하며 요소를 축약한다.
// 즉, 배열의 요소를 축약할 때 사용한다.
// reduceRight은 축약한 요소를 반환하며 원본배열과 길이가 같다.
function reduceRight(callback, initialValue) {
  let result = initialValue;
  for (let i = a.length - 1; i >= 0; i--) {
    result = callback(result, a[i], i, a);
  }
  return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer17 = a.reduceRight((prev, curr, idx, arr) => prev + curr, 0);
console.log(answer17); // 75

//--------------------------------------------------------------
// get
// 배열의 요소를 하나하나 탐색하며 요소를 반환한다.
// 즉, 배열의 요소를 반환할 때 사용한다.
// get은 반환한 요소를 반환하며 원본배열과 길이가 같다.
function get(index) {
  return a[index];
}

a = [10, 11, 12, 13, 14, 15];
// let answer18 = a.get(3);
// console.log(answer18); // 13

//--------------------------------------------------------------
// set
// 배열의 요소를 하나하나 탐색하며 요소를 변경한다.
// 즉, 배열의 요소를 변경할 때 사용한다.
// set은 변경한 요소를 반환하며 원본배열과 길이가 같다.
function set(index, value) {
  a[index] = value;
  return a[index];
}

a = [10, 11, 12, 13, 14, 15];
// let answer19 = a.set(3, 16);
// console.log(answer19); // 16

//--------------------------------------------------------------
// of
// 배열의 요소를 하나하나 탐색하며 요소를 반환한다.
// 즉, 배열의 요소를 반환할 때 사용한다.
// of은 반환한 요소를 반환하며 원본배열과 길이가 같다.
function of(...args) {
  return args;
}

let answer20 = Array.of(10, 11, 12, 13, 14, 15);
console.log(answer20); // [10, 11, 12, 13, 14, 15]

//--------------------------------------------------------------
// from
// 배열의 요소를 하나하나 탐색하며 요소를 반환한다.
// 즉, 배열의 요소를 반환할 때 사용한다.
// from은 반환한 요소를 반환하며 원본배열과 길이가 같다.
function from(arrayLike, mapFn, thisArg) {
  let result = [];
  for (let i = 0; i < arrayLike.length; i++) {
    result.push(arrayLike[i]);
  }
  return result;
}

let answer21 = Array.from([10, 11, 12, 13, 14, 15]);
console.log(answer21); // [10, 11, 12, 13, 14, 15]

//--------------------------------------------------------------
// has
// 배열의 요소를 하나하나 탐색하며 요소를 반환한다.
// 즉, 배열의 요소를 반환할 때 사용한다.
// has은 반환한 요소를 반환하며 원본배열과 길이가 같다.
function has(index) {
  return a[index] !== undefined;
}

a = [10, 11, 12, 13, 14, 15];
// let answer22 = a.has(3); // 3번째 요소가 존재한다.
// console.log(answer22); // true

//--------------------------------------------------------------
// push
// 배열의 요소를 하나하나 탐색하며 요소를 추가한다.
// 즉, 배열의 요소를 추가할 때 사용한다.
// push은 추가한 요소를 반환하며 원본배열과 길이가 같다.
function push(...args) {
  for (let i = 0; i < args.length; i++) {
    a[a.length] = args[i];
  }
  return a.length;
}

a = [10, 11, 12, 13, 14, 15];
let answer23 = a.push(16, 17, 18);
console.log(answer23); // 9

//--------------------------------------------------------------
// pop
// 배열의 요소를 하나하나 탐색하며 요소를 제거한다.
// 즉, 배열의 요소를 제거할 때 사용한다.
// pop은 제거한 요소를 반환하며 원본배열과 길이가 같다.
function pop() {
  let result = a[a.length - 1];
  a.length = a.length - 1;
  return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer24 = a.pop();
console.log(answer24); // 15

//--------------------------------------------------------------
// unshift
// 배열의 요소를 하나하나 탐색하며 요소를 추가한다.
// 즉, 배열의 요소를 추가할 때 사용한다.
// unshift은 추가한 요소를 반환하며 원본배열과 길이가 같다.
function unshift(...args) {
  for (let i = a.length - 1; i >= 0; i--) {
    a[i + args.length] = a[i];
  }
  for (let i = 0; i < args.length; i++) {
    a[i] = args[i];
  }
  return a.length;
}

a = [10, 11, 12, 13, 14, 15];
let answer25 = a.unshift(9, 8, 7);
console.log(answer25); // 9

//--------------------------------------------------------------
// shift
// 배열의 요소를 하나하나 탐색하며 요소를 제거한다.
// 즉, 배열의 요소를 제거할 때 사용한다.
// shift은 제거한 요소를 반환하며 원본배열과 길이가 같다.
function shift() {
  let result = a[0];
  for (let i = 0; i < a.length - 1; i++) {
    a[i] = a[i + 1];
  }
  a.length = a.length - 1;
  return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer26 = a.shift();
console.log(answer26); // 10

//--------------------------------------------------------------
// keys
// 배열의 요소를 하나하나 탐색하며 요소의 인덱스를 반환한다.
// 즉, 배열의 요소의 인덱스를 반환할 때 사용한다.

function keys() {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(i);
  }
  return result;
}

a = [10, 11, 12, 13, 14, 15];
console.log(Object.keys(a)); // ['0', '1', '2', '3', '4', '5']

//--------------------------------------------------------------
// assign
// 배열의 요소를 하나하나 탐색하며 요소를 추가한다.
// 즉, 배열의 요소를 추가할 때 사용한다.
// assign은 추가한 요소를 반환하며 원본배열과 길이가 같다.
function assign(target, ...args) {
  for (let i = 0; i < args.length; i++) {
    for (let key in args[i]) {
      target[key] = args[i][key];
    }
  }
  return target;
}

let answer27 = Object.assign({ a: 1 }, { b: 2 }, { c: 3 });
console.log(answer27); // { a: 1, b: 2, c: 3 }

//--------------------------------------------------------------
// setPrototypeOf
// 주어진 객체의 프로토타입을 변경 또는 null로 설정한다.
// obj : 프로토타입을 변경할 객체
// prototype : 새로운 프로토타입 값 또는 null
function setPrototypeOf(obj, prototype) {
  obj.__proto__ = prototype;
  return obj;
}

let answer28 = Object.setPrototypeOf({ a: 1 }, { b: 2 });
console.log(answer28); // { a: 1 }

//--------------------------------------------------------------
// getPrototypeOf
// 주어진 객체의 프로토타입을 반환한다.
// obj : 프로토타입을 반환할 객체
function getPrototypeOf(obj) {
  return obj.__proto__;
}

let answer29 = Object.getPrototypeOf({ a: 1 });
console.log(answer29); // {}

//--------------------------------------------------------------
// is
// 두 개의 값이 같은지 비교한다.
// value1 : 비교할 첫 번째 값
// value2 : 비교할 두 번째 값
function is(value1, value2) {
  return value1 === value2;
}

let answer30 = Object.is(1, 1);
console.log(answer30); // true

//--------------------------------------------------------------
// isExtensible
// 객체의 확장 가능 여부를 반환한다.
// obj : 확장 가능 여부를 확인할 객체
function isExtensible(obj) {
  return obj.isExtensible;
}

let answer31 = Object.isExtensible({ a: 1 });
console.log(answer31); // true

//--------------------------------------------------------------
// isSealed
// 객체의 밀봉 여부를 반환한다. 객체의 쓰기 가능한 프로퍼티를 제외하고 변경 금지된 상태인지를 확인한다.
// obj : 밀봉 여부를 확인할 객체
// 쓰기 가능한 프로퍼티를 제외하고 변경 금지된 상태인 경우에는 true, 그렇지 않은 경우에는 false를 반환
function isSealed(obj) {
  return obj.isSealed;
}

let answer32 = Object.isSealed({ a: 1 });
console.log(answer32); // false

var obj = {
  prop: "Hello",
};

// 변경이 불가능한지 테스트
console.log(Object.isSealed(obj)); // false

// 변경을 하지 못하도록 처리
Object.seal(obj); // seal은 객체를 변경할 수 없게 만든다.

// 변경이 불가능한지 테스트
console.log(Object.isSealed(obj)); // true

//--------------------------------------------------------------
// entries
// 객체의 프로퍼티를 하나하나 탐색하며 프로퍼티의 키와 값을 반환한다.
// 즉, 객체의 프로퍼티의 키와 값을 반환할 때 사용한다.
function entries(obj) {
  let result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

let answer33 = Object.entries({ a: 1, b: 2, c: 3 });
console.log(answer33); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//--------------------------------------------------------------
// create
// 주어진 프로토타입과 속성을 가진 새로운 객체를 생성한다.
// proto : 새로 생성할 객체의 프로토타입
// propertiesObject : 새로 생성할 객체의 속성을 나타내는 객체
function create(proto, propertiesObject) {
  let obj = {};
  obj.__proto__ = proto;
  return obj;
}

let answer34 = Object.create({ a: 1 }, { b: 2 });
console.log(answer34); // {}

//--------------------------------------------------------------
// freeze
// 객체를 변경할 수 없게 만든다.
// obj : 변경할 수 없게 만들 객체
function freeze(obj) {
  obj.isExtensible = false;
  return obj;
}

//--------------------------------------------------------------
// seal
// 객체의 쓰기 가능한 프로퍼티를 제외하고 변경 금지한다.
// obj : 변경 금지할 객체
function seal(obj) {
  obj.isSealed = true;
  return obj;
}

//--------------------------------------------------------------
// bind
// 함수의 this를 바인딩한다.
// thisArg : this로 사용할 객체
// args : 함수에 전달할 인수
function bind(func, thisArg, ...args) {
  return function () {
    return func.apply(thisArg, args);
  };
}

//--------------------------------------------------------------
// call
// 함수를 호출하며 this를 바인딩한다.
// thisArg : this로 사용할 객체
// args : 함수에 전달할 인수
function call(func, thisArg, ...args) {
  return func.apply(thisArg, args);
}

//--------------------------------------------------------------
// apply
// 함수를 호출하며 this를 바인딩한다.
// thisArg : this로 사용할 객체
// args : 함수에 전달할 인수 배열
function apply(func, thisArg, args) {
  return func.apply(thisArg, args);
}
// call과 apply의 차이
// call 메소드와 동일 하나, call 메소드는 인자 하나 하나를, apply는 인자 리스트를 전달.

//--------------------------------------------------------------
// once
// 함수를 한 번만 실행할 수 있도록 한다.
// func : 한 번만 실행할 함수
function once(func) {
  let isCalled = false;
  return function () {
    if (!isCalled) {
      isCalled = true;
      return func.apply(this, arguments);
    }
  };
}

//--------------------------------------------------------------
// memoize
// 함수의 결과를 캐싱하여 같은 인수로 함수를 호출할 경우 캐싱된 결과를 반환한다.
// func : 캐싱할 함수
function memoize(func) {
  let cache = {};
  return function () {
    let key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    } else {
      let result = func.apply(this, arguments);
      cache[key] = result;
      return result;
    }
  };
}

//--------------------------------------------------------------
// after
// 함수를 호출한 횟수가 주어진 횟수 이상이 되면 주어진 함수를 실행한다.
// times : 함수를 실행할 횟수
// func : 실행할 함수
function after(times, func) {
  return function () {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}

//--------------------------------------------------------------
// before
// 함수를 호출한 횟수가 주어진 횟수 이하가 되면 주어진 함수를 실행한다.
// times : 함수를 실행할 횟수
// func : 실행할 함수
function before(times, func) {
  return function () {
    if (--times >= 0) {
      return func.apply(this, arguments);
    }
  };
}

//--------------------------------------------------------------
// ary
// 함수의 인수를 제한한다.
// func : 인수를 제한할 함수
// n : 제한할 인수의 개수
function ary(func, n) {
  return function () {
    return func.apply(this, Array.from(arguments).slice(0, n));
  };
}

//--------------------------------------------------------------
// unary
// 함수의 인수를 하나만 받을 수 있도록 한다.
// func : 인수를 하나만 받을 수 있도록 할 함수
function unary(func) {
  return function (arg) {
    return func(arg);
  };
}
