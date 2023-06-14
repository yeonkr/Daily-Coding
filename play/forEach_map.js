// forEach vs map
// forEach
// forEach는 return이 없다.
// forEach는 새로운 배열을 만들지 않는다.
// forEach는 원본 배열을 변경하지 않는다.

// map
// map은 return이 있다.
// map은 새로운 배열을 만들어서 return한다.
// map은 원본 배열을 변경하지 않는다.

function forEach() {
  const arr = [1, 2, 3, 4, 5];
  const result = arr.forEach((item, index) => {
    console.log(item, index);
    return item + 1; // return이 없다. undefined
    // 1 0
    // 2 1
    // 3 2
    // 4 3
    // 5 4
  });
  console.log(result); // undefined
}

function map() {
  const arr = [1, 2, 3, 4, 5];
  const result = arr.map((item, index) => {
    // 새로운 배열을 만들어서 return한다.
    console.log(item, index);
    return item + 1; // return이 있다. [2, 3, 4, 5, 6]
    // 1 0
    // 2 1
    // 3 2
    // 4 3
    // 5 4
  });
  console.log(result); // [2, 3, 4, 5, 6]
}

forEach();
map();
