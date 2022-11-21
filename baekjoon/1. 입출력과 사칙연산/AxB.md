## A×B

### 문제

두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

<br/>

### 입력

첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

<br/>

### 출력

첫째 줄에 A×B를 출력한다.

---

require("fs") : node.js의 file system 모듈을 불러온다.
readFileSync() : 해당 경로의 파일을 동기적으로 읽어 인풋에 저장한다.

```js
const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a * b);
```
