class Person {
  constructor(name) {
    this.name = name;
  }

  static sayHi() {
    console.log("hi");
  }

  protoThis() {
    console.log(this);
  }

  static staticThis() {
    console.log(this);
  }
}

Person.sayHi();

// 정적 메소드는 클래스(함수 객체)에 바인딩 되어 있으므로 프로토타입 객체를 상속 받는 인스턴스는 정적 메소드를 사용할 수 없다
const someone = new Person("lee");
// someone.sayHi();

Person.staticThis(); //정적 메소드 내의 this는 클래스를 가리킨다
someone.protoThis(); //프로토타입 메소트 내의 this는 호출하는 인스턴스를 가리킨다
