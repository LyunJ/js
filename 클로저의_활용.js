//전역변수 num 값이 increase함수 외의 다른 작용에 의해 변경될 수 있으므로 나쁜 코드
// let num = 0;

// const increase = function () {
//   return ++num;
// };

// console.log(increase());
// console.log(increase());
// console.log(increase());

//  increase 함수가 호출될 때 마다 초기화 되므로 오류
// const increase = function () {
//   let num = 0;

//   return ++num;
// };
// console.log(increase());
// console.log(increase());
// console.log(increase());

// 내가 한 것
// const increase = function () {
//   let num = 0;

//   const inc = function () {
//     return ++num;
//   };

//   return inc;
// };

// const inc = increase();

// console.log(inc());
// console.log(inc());
// console.log(inc());

//예제
// const increase = (function () { // 즉시 실행 함수
//   let num = 0;
//   return function () {
//     return ++num;
//   };
// }());

// console.log(increase());
// console.log(increase());
// console.log(increase());

// 객체를 사용한 예
// const counter = (function () {
//   let num = 0;

//   return {
//     increase() {
//       return ++num;
//     },
//     decrease() {
//       return --num;
//     },
//   };
// })();

// console.log(counter.increase());
// console.log(counter.increase());

// console.log(counter.decrease());
// console.log(counter.decrease());

//생성자 함수를 사용한 예
// const Counter = (function () {
//   let num = 0;

//   function Counter() {
//     this.num = 0; // 은닉을 위해서 생성자 함수의 내부에 프로퍼티로 num을 추가하지 않는다
//   }

//   Counter.prototype.increase = function () {
//     return ++num;
//   };

//   Counter.prototype.decrease = function () {
//     return num > 0 ? --num : 0;
//   };

//   return Counter;
// })();

// const counter = new Counter();

// console.log(counter.increase());
// console.log(counter.increase());

// console.log(counter.decrease());
// console.log(counter.decrease());

// function makeCounter(predicate) {
//   let counter = 0;

//   return function () {
//     counter = predicate(counter);
//     return counter;
//   };
// }

// function increase(n) {
//   return ++n;
// }

// function decrease(n) {
//   return --n;
// }

// const increaser = makeCounter(increase);
// console.log(increaser());
// console.log(increaser());

// // increaser와는 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다
// const decreaser = makeCounter(decrease);
// console.log(decreaser());
// console.log(decreaser());
