## X보다 작은 수

### 문제

정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

<br/>

### 입력

첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

<br/>

### 출력

X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

<br/>

### 예제 입력 1

```
10 5
1 10 4 9 2 3 8 5 7 6
```

<br/>

### 예제 출력 1

```
1 4 2 3
```

---

```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = input[0].split(" ").map((el) => +el);
let arr = input[1].split(" ").map((el) => +el);
let answer = "";

for (let i = 0; i < num[0]; i++) {
  if (num[1] > arr[i]) answer += arr[i] + " ";
}

console.log(answer);

// 1. 입력받은 문자열을 공백을 기준으로 나누어 배열로 만든다.
// 2. 배열의 첫번째 요소를 num에 저장한다.
// 3. 배열의 두번째 요소를 arr에 저장한다.
// 4. answer에 빈 문자열을 할당한다.
// 5. for문을 사용하여 num[0]번 반복한다.
// 6. num[1]이 arr[i]보다 크면 answer에 arr[i]를 더한다.
// 7. answer를 출력한다.
```
