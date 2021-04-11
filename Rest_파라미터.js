// function foo(...rest) {
//   // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
//   console.log(rest); // [ 1, 2, 3, 4, 5 ]
// }

// foo(1, 2, 3, 4, 5);

// function foo(param, ...rest) {
//   console.log(param); // 1
//   console.log(rest); // [ 2, 3, 4, 5 ]
// }

// foo(1, 2, 3, 4, 5);

// function bar(param1, param2, ...rest) {
//   console.log(param1); // 1
//   console.log(param2); // 2
//   console.log(rest); // [ 3, 4, 5 ]
// }

// bar(1, 2, 3, 4, 5);

// //Rest 파라미터는 맨 마지막에 사용해야 하고 단 하나만 선언할 수 있다
// function foo(...rest, param1, param2) { }

// foo(1, 2, 3, 4, 5);
// // SyntaxError: Rest parameter must be last formal parameter

// function foo(...rest1, ...rest2) { }

// foo(1, 2, 3, 4, 5);
// // SyntaxError: Rest parameter must be last formal parameter

//Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.
// function foo(...rest) {}
// console.log(foo.length); // 0

// function bar(x, ...rest) {}
// console.log(bar.length); // 1

// function baz(x, y, ...rest) {}
// console.log(baz.length); // 2

//ES5에서는 가변 인자 함수의 경우 매개변수를 arguments 객체를 활용하여 전달 받았다.
//arguments객체는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용할 수 있다
//하지만 유사 배열 객체로 배열 메서드를 사용하려면 Function.prototype.call 이나 Function.prototype.apply 메서드를 사용해 arguments 객체를 배열로 변환해야 하는 번거로움이 있다
// function sum() {
//   // 유사 배열 객체인 arguments 객체를 배열로 변환한다.
//   var array = Array.prototype.slice.call(arguments);

//   return array.reduce(function (pre, cur) {
//     return pre + cur;
//   }, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); // 15

//ES6
function sum(...args) {
  // Rest 파라미터 args에는 배열 [1, 2, 3, 4, 5]가 할당된다.
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
