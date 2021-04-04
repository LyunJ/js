class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }


    //접근자 프로퍼티를 통한 프로퍼티 값의 저장
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    //접근자 프로퍼티를 통한 프로퍼티 값의 참조
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me = new Person('Ungmo','Lee');

console.log(`${me.firstName} ${me.lastName}`);

me.fullName = 'Heegum Lee';
console.log(me);

console.log(me.fullName);

console.log(Object.getOwnPropertyDescriptor(Person.prototype,'fullName'));