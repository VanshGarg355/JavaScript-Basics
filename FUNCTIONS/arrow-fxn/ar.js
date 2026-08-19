// arrow functions = a concise way to write function expressions good for simple functions that you use only once (parameters) => some code

const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years.old`)};

hello("Bro", 25);

setTimeout(() => {console.log("I waited 3 seconds")}, 3000);

const numbers = [1, 2, 3, 4, 5];

const square = numbers.map((number) => number * number);
console.log(square);

const cube = numbers.map((number) => Math.pow(number, 3));
console.log(cube);

const even = numbers.filter((number) => number % 2 === 0);
console.log(even);

const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);