//두 표현은 같다
// const power = (x) => x ** 2;
// const power = (x) => {
//   return x ** 2;
// };

//표현식이 들어간 경우 중괄호를 생략할 수 없다
//const arrow = () => const x = 1;
//const arrow = () => { const x = 1;};

//객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호()로 감싸 주어야 한다.
// const create = (id, content) => ({ id, content });
// create(1, "JavaScript");
// const create = (id, content) => {
//   return { id, content };
// };
// 아래는 함수 몸체에서 쉼표 연산자로 인식된다
// const create = (id, content) => { id, content };

//화살표 함수도 즉시 실행 함수로 사용할 수 있다.
// const person = ((name) => ({
//   sayHi() {
//     return `Hi? My name is ${name}.`;
//   },
// }))("Lee");
// console.log(person.sayHi());

/**
 * 화살표 함수의 특징
 * 1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.
 * 2. 중복된 매개변수 이름을 선언할 수 없다.
 * 3. 화살표 함수는 함수 자체의 this.arguments, super, new.target바인딩을 갖지 않는다
 */
//1
// const Foo = () => {};
// new Foo(); //TypeError: Foo is not a constructor
//화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
// const Foo = () => {};
// Foo.hasOwnProperty("prototype"); //False

//2
//일반함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않는다.(strict mode에서 중복된 매개변수 이름을 선언하면 에러가 발생한다)
// function normal(a, a) {
//   return a + a;
// }
// console.log(normal(1, 2));
//화살표 함수에서도 중복된 매개변수 이름을 선언하면 에러가 발생한다.
//const arrow = (a, a) => a + a;

//this
// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   add(arr) {
//     //TypeError: Cannot read property 'prefix' of undefined
//     //고차함수의 인수로 전달되어 고차 함수 내부에서 호출되는 콜백 함수도 중첩함수라고 할 수 있다.
//     //중첩함수의 this는 전역객체를 가르키므로 this.prefix는 window.prefix가 되고 선언되지 않았다는 에러가 생긴다.
//     return arr.map(function (item) {
//       return this.prefix + item;
//     });
//   }
// }

// const prefixer = new Prefixer("-webkit-");
// console.log(prefixer.add(["transition", "user-select"]));

//ES6에서 중첩함수
//화살표 함수는함수 자체의 this바인딩이 존재하지 않기 때문에 화살표 함수 내부에서 this를 참조하면 일반적인 식별자처럼 스코프 체인을 통해 상위 스코프에서 this를 탐색한다
// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   add(arr) {
//     return arr.map((item) => this.prefix + item);
//   }
// }

// const prefixer = new Prefixer("-webkit-");
// console.log(prefixer.add(["transition", "user-select"]));

// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다.
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다.
// const counter = {
//   num: 1,
//   increase() {
//     return ++this.num;
//   },
// };

// console.log(counter.increase());

//일반함수 동적 추가
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   console.log(`Hi ${this.name}`);
// };

// const person = new Person("Lee");
// person.sayHi(); // Hi Lee

//ES6메서드 동적 추가
function Person(name) {
  this.name = name;
}

console.log(Person.prototype.constructor);

Person.prototype = {
  // constructor 프로퍼티와 생성자 함수 간의 연결을 재설정
  constructor: Person,
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};
console.log(Person.prototype.constructor);

const person = new Person("Lee");
person.sayHi(); // Hi Lee
