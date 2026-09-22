// callback = a function that is passed as an argument
//to another function.

// used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

hello(goodbye);

function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("Goodbye");
}



sum(displayConsole, 1, 2);

function sum(callback, x, y){
let .result = x + y; I
callback(result);
}
function displayConsole(result){
console.log(result);
}






// forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element

//array. forEach(callback)
//element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

numbers. forEach(cube);
numbers.forEach(display);

function double(element, index, array){
array[index] = element * 2;

}

function triple(element, index, array){
array[index] = element * 3;

}

function square(element, index, array){
array[index] = Math.pow(element, 2);
}

function display(element){
console.log(element);
}





let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
array[index] = element. toUpperCase();

}


fruits.forEach(capitalize);
fruits.forEach(display);

function capitalize(element, index, array){
array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
console.log(element);

}




