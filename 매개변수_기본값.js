/**
 * 매개변수를 입력하지 않았을 때 매개변수값은 undefined이다
 * 이를 방지하기 위해 방어 코드를 작성한다
 */

// 매개변수를 입력하지 않았을 때
// function sum(x,y){
//     return x+y;
// }
// console.log(sum(1)) //NaN

// 방어 코드(ES5)
// function sum(x, y) {
//   x = x || 0;
//   y = y || 0;

//   return x + y;
// }

// console.log(sum(1, 2)); //3
// console.log(sum(1)); //1

//방어 코드(ES6)
// function sum(x = 0, y = 0) {
//   return x + y;
// }

// console.log(sum(1, 2)); //3
// console.log(sum(1)); //1

//매개변수 기본값은 매개변수에 인수를 전달하지 않은 경우와 undefined를 전달한 경우에만 유효하다.
// function logName(name = "Lee") {
//   console.log(name);
// }

// logName();
// logName(undefined);
// logName(null);

//Rest 파라미터에는 기본값을 지정할 수 없다
// function foo(...rest = []) {
//     console.log(rest);
//   }
// SyntaxError: Rest parameter may not have a default initializer

//매개변수 기본값은 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티와 arguments 객체에 아무런 영향을 주지 않는다
//Function.length는 매개변수의 입력개수의 기대값이고, arguments.length는 함수 내부에 local하기 때문에 실제로 전달된 매개변수의 개수이다.
//하지만 매개변수 기본값은 arguments에도 영향을 주지 않기 때문에 arguments.length에서도 생략된다.
// function sum(x, y = 0) {
//   console.log(arguments);
//   console.log(arguments.length);
// }
// console.log(sum.length);

// sum(1);
// sum(1, 2);

//기본 인수는 호출 시 평가된다
//python과는 다름
// function append(value, array = []) {
//   array.push(value);
//   return array;
// }

// console.log(append(1)); // [1]
// append(2); // [2], [1, 2]가 아니라

// // 앞에서 선언된 매개변수는 뒤에서 사용할 수 있다
// function greet(name, greeting, message = greeting + " " + name) {
//   return [name, greeting, message];
// }

// greet("David", "Hi"); // ["David", "Hi", "HiDavid"]
// greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]

//스코프 효과
//한 개 이상의 매개변수 기본값이 사용되면 매개변수 목록 내의 식별자들을 대상으로 두번 째 스코프([Environment Record])가 생성된다.
//따라서 함수 내부에 선언된 변수와 함수들은 매개변수 기본값에 사용할 수 없다.
// function f(a = go()) {
//   // `f`가 호출 되면 `ReferenceError` 발생
//   function go() {
//     return ":P";
//   }
// }

// function f(a, b = () => console.log(a)) {
//   var a = 1;
//   b(); // `undefined`를 인쇄하는데, 매개변수 기본값이 자체 스코프에 있기 때문입니다
// }
// f(); //undefined
// f(1); //1
