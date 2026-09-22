// object = a collection of related properties and methods can represent a real world object like a car, person, or dog.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`); 
    }
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
person.sayHello();

// this = refers to the object that is executing the current function. In the example above, `this` refers to the `person` object when the `sayHello` method is called.