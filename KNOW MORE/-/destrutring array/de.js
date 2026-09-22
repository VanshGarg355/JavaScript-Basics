// destructuring = extract values from arrays and objects,then assign them to variables in a convenient w[] = to perform array destructuring = to perform object destructuring

const { constants } = require("node:buffer");

// 5 examples

//ex-1

// swap the value of two variable

let a = 1;
b = 2;
[a, b] = [b, a];

console.log(a);
console.log(b);

//ex-2

const color = ["red", "green", "blue", "black"];

[color[0], color[3]] = [color[3], color[2]];

console.log(color);

// ex-3

const [first, second, third] = color;

console.log(first);
console.log(second);
console.log(third);

// ex-4

const per1 = {
  firstname: "vansh",
  lastname: "garg",
  age: 18,
  job: "web dev",
};

const per2 = {
  firstname: "varun",
  lastname: "chaubey",
  age: 21,
  job: "full stack",
};

const { firstname, lastname, age, job } = per1;

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

// ex-5

function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};
