// const isIterable = (v) =>
//   v !== null && typeof v[Symbol.iterator] === "function";

// //배열, 문자열, Map, Set 등은 이터러블이다
// isIterable([]);
// isIterable("");
// isIterable(new Map());
// isIterable(new Set());
// isIterable({}); //false

/**
 * 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
 * 이터러블은 for ... of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
 */

// const array = [1, 2, 3];

// // 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
// console.log(Symbol.iterator in array); // true

// // 이터러블인 배열은 for...of 문으로 순회 가능하다.
// for (const item of array) {
//   console.log(item);
// }

// // 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있다.
// console.log([...array]); // [1, 2, 3]

// // 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
// const [a, ...rest] = array;
// console.log(a, rest); // 1, [2, 3]

/**
 * Symbol.iterator 메서드를 직접 구현하지 않거나 상속받지 않은 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다.
 * 따라서 일반 객체는 for ... of 문으로 순회할 수 없으며 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 없다.
 * 하지만 일반 객체도 이터러블 프로토콜을 준수하도록 구현하면 이터러블이 된다.
 */

// const obj = { a: 1, b: 2 };

// // 일반 객체는 Symbol.iterator 메서드를 구현하거나 상속받지 않는다.
// // 따라서 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다.
// console.log(Symbol.iterator in obj); // false

// // 이터러블이 아닌 일반 객체는 for...of 문으로 순회할 수 없다.
// for (const item of obj) {
//   // -> TypeError: obj is not iterable
//   console.log(item);
// }

// // 이터러블이 아닌 일반 객체는 배열 디스트럭처링 할당의 대상으로 사용할 수 없다.
// const [a, b] = obj; // -> TypeError: obj is not iterable

// const obj = { a: 1, b: 2 };

// // 스프레드 프로퍼티 제안(Stage 4)은 객체 리터럴 내부에서 스프레드 문법의 사용을 허용한다.
// console.log({ ...obj }); // { a: 1, b: 2 }

//이터레이터
/**
 * 이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.
 * 이터러블의 Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
 * 이터레이터의 next 메서드는 이터러블의 각 요소를 순회하기 위한 포인터의 역할을 한다.
 * 즉, next 메서드를 호출하면 이터러블을 순차적으로 한 단계씩 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다
 */

// // 배열은 이터러블 프로토콜을 준수한 이터러블이다.
// const array = [1, 2, 3];

// // Symbol.iterator 메서드는 이터레이터를 반환한다.
// const iterator = array[Symbol.iterator]();

// // Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
// console.log("next" in iterator); // true

// // 배열은 이터러블 프로토콜을 준수한 이터러블이다.
// const array = [1, 2, 3];

// // Symbol.iterator 메서드는 이터레이터를 반환한다. 이터레이터는 next 메서드를 갖는다.
// const iterator = array[Symbol.iterator]();

// next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를
// 반환한다. 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체다.
// console.log(iterator); // Object [Array Iterator] {}
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

/**
 * for .. in문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.
 * 이때 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다.
 * for .. of문은 내부적으로 이터레이터의 next 메서드를 호출하여 이터러블을 순회하며 next 메서드가 반환한 이터레이터 리절트 객체의 value  프로퍼티 값을 for ... of 문의 변수에 할당한다.
 * 그리고 이터레이터 리절트 객체의 done 프로퍼티 값이 false 이면 이터러블의 순회를 계속하고 true 이면 이터러블의 순회를 중단한다.
 */

// for (const item of [1, 2, 3]) {
//   console.log(item); //1 2 3
// }
// //for ... of의 내부동작
// const iterable = [1, 2, 3];

// //이터러블의 Symbol.iterator 메서드를 호출하여 이터레이터를 생성한다.
// const iterator = iterable[Symbol.iterator]();

// for (;;) {
//   //이터레이터의 next 메서드를 호출하여 이터러블을 순회한다.
//   //이때 next 메서드는 이터레이터 리절트 객체를 반환한다.\
//   const res = iterator.next();

//   // next 메서드가 반환한 이터레이터 리절트 객체의 done 프로퍼티 값이 true이면 이터러블의 순회를 중단한다.
//   if (res.done) break;

//   // 이터레이터 리절트 객체의 value 프로퍼티 값을 item 변수에 할당한다.
//   const item = res.value;
//   console.log(item); // 1 2 3
// }

// // 유사 배열 객체
// const arrayLike = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
// };

// // 유사 배열 객체는 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수 있다.
// for (let i = 0; i < arrayLike.length; i++) {
//   // 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.
//   console.log(arrayLike[i]); // 1 2 3
// }
// // 유사 배열 객체는 이터러블이 아니기 때문에 for...of 문으로 순회할 수 없다.
// for (const item of arrayLike) {
//   console.log(item); // 1 2 3
// }
// // -> TypeError: arrayLike is not iterable
