// //일반 객체도 이터레이션 프로토콜을 준수하도록 구현하면 사용자 정의 이터러블이 된다.

// const fibonacci = {
//   [Symbol.iterator]() {
//     let [pre, cur] = [0, 1];
//     const max = 10; // 수열의 최대값

//     //Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환해야 하고
//     //next 메서드는 이터레이터 리절트 객체를 반환해야 한다.
//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur];
//         return { value: cur, done: cur >= max };
//       },
//     };
//   },
// };

// for (const num of fibonacci) {
//   console.log(num);
// }

// //이터러블은 스프레드 문법의 대상이 될 수 있다.
// const arr = [...fibonacci];
// console.log(arr);

// //이터러블은 배열 디스트럭처링 할당의 대상이 될 수 있다.
// const [first, second, ...rest] = fibonacci;
// console.log(first, second, rest);

// //이터러블을 생성하는 함수
// const fibonacciFunc = function (max) {
//   let [pre, cur] = [0, 1];

//   return {
//     [Symbol.iterator]() {
//       return {
//         next() {
//           [pre, cur] = [cur, pre + cur];
//           return { value: cur, done: cur >= max };
//         },
//       };
//     },
//   };
// };

// for (const num of fibonacciFunc(10)) {
//   console.log(num);
// }

//이터러블이면서 이터레이터인 객체를 생성하는 함수
//이터러블이면서 이터레이터인 객체를 생성하면 Symbol.iterator 메서드를 호출하지 않아도 된다. 다음 객체는 Symbor.iterator 메서드와 enxt 메서드를 소유한 이터러블 이면서 이터레이터다.
//Symbol.iterator 메서드는 this를 반환하므로 next 메서드를 갖는 이터레이터를 반환한다.
// 이터러블이면서 이터레이터인 객체. 이터레이터를 반환하는 Symbol.iterator 메서드와
// 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.
// {
//     [Symbol.iterator]() { return this; },
//     next() {
//       return { value: any, done: boolean };
//     }
//   }

//fiobnacciFunc를 이터러블이면서 이터레이터인 객체를 생성하여 반환하는 함수로 변경
const fibonacciFunc = function (max) {
  let [pre, cur] = [0, 1];

  //Symbol.iterator 메서드와 next 메서드를 소유한 이터러블이면서 이터레이터인 객체를 반환
  return {
    [Symbol.iterator]() {
      return this;
    },
    //next 메서드는 이터레이터 리절트 객체를 반환
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur, done: cur >= max };
    },
  };
};

let iter = fibonacciFunc(10);

for (const num of iter) {
  console.log(num);
}

iter = fibonacciFunc(10);

console.log(iter.next());
console.log(iter.next());

//무한 이터러블과 지연평가
/**
 * 데이터 소비자인 for...of문이나 배열 디스트럭처링 할당 등이 실행되기 이전까지 데이터를 생성하지는 않는다.
 * for...of문의 경우 이터러블을 순회할 때 내부에서 이터레이터의 next 메서드를 호출하는데 바로 이때 데이터가 생성된다.
 * next메서드가 호출되기 전까지는 데이터를 생성하지 않는다.ㄴ
 */

// 무한 이터러블을 생성하는 함수
const fibonacciFunc = function () {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      // 무한을 구현해야 하므로 done 프로퍼티를 생략한다.
      return { value: cur };
    },
  };
};

// fibonacciFunc 함수는 무한 이터러블을 생성한다.
for (const num of fibonacciFunc()) {
  if (num > 10000) break;
  console.log(num); // 1 2 3 5 8...4181 6765
}

// 배열 디스트럭처링 할당을 통해 무한 이터러블에서 3개의 요소만 취득한다.
const [f1, f2, f3] = fibonacciFunc();
console.log(f1, f2, f3); // 1 2 3
