// modulo
// 문제
// 두 수(num1, num2)를 입력받아, num1를 num2로 나눈 나머지를 리턴해야 합니다.

// 입력
// 인자 1 : num1
// number 타입의 정수 (num1 >= 0)
// 인자 2 : num2
// number 타입의 정수 (num2 >= 0)

// 출력
// number 타입을 리턴해야 합니다.

// 주의 사항
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 어떤 수로 나누어도 나머지가 0입니다.
// 어떤 수도 0으로 나눌 수 없습니다. 이 경우 'Error: cannot divide by zero'를 리턴해야 합니다.

function modulo(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.

    // 10/2과 10 -2*5 는 나머지 0
    // 나눗셈 = 여러번의 뺄셈

    if(num1, num2 === 0) {
        return 'Error: cannot divide by zero'
        // num1이 num2보다 크거나 같다면 num1 - num2의 값이 num1이 되는 반복문 수행 
    } while(num1 >= num2) {
        num1 = num1 - num2 
        // num1이 num2보다 작다면 num1 리턴
    } if(num1 < num2){
        return num1 
    }
}
