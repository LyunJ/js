// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// const me = new Person("kim");

// console.log(me.getName());

// const you = new Person("lee");

// console.log(you.getName());

const Person = (function () {
  let _age = 0;
  function Person(name, age) {
    this.name = name;
    _age = age;
  }

  Person.prototype.sayHi = function () {
    console.log(`Hi My anem is ${this.name}, I am ${_age}`);
  };

  return Person;
})();

const me = new Person("Lee", 30);
me.sayHi();
console.log(me.name);
console.log(me._age);

const you = new Person("Kim", 20);
you.sayHi();
console.log(you.name);
console.log(you._age);

me.sayHi();
