// function declaration = define a reusable block of code that performs a specific task

function greet() {
    console.log("Hello, World!");
}

// function expressions = a way to define functions as values or variables

const sayHello = function() {
    console.log("Hello, there!");
};

sayHello(); // calling the function expression
greet(); // calling the function declaration




setTimeout(function(){
console.log("Hello");
}, 3000); // show output after 3 seconds


const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(num) {
    return num * num;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]