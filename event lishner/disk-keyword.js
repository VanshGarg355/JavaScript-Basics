const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
person.sayHello();
