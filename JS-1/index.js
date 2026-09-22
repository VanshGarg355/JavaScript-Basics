console.log(' I like pizza!');
console.log('It is really good!');

window.alert("I really love pizza!");

// VARiABLES
//  A variable is a container for storing data 
//  A variable behaves as if it was the value that it contains 
// Two steps:
//   1. Declaration (var, let, const) 
//  2. Assignment (= assignment operator)
 
let age = 21; //numbers
//  or let age;
//   age = 21;
console.log(age);

let printname = "bro"; //strings
console.log(printname);

let student = true // boolean values
console.log(student);
// some more boolean ex

let online = false;
let forSale = true;
let isStudent = true;

console.log('Bro is online:', online);
console.log('Is this car forSale:', forSale);
console.log('Enrolled:', isStudent);



age = age +1;

// types
console.log(typeof age)
console.log(typeof printname)


console.log("hello " , printname)
console.log("you are ", age , "years old")

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("p1").textContent = " hello " +  printname;
document.getElementById("p2").innerHTML = "you are  "+ age + "years old";
document.getElementById("p3").innerHTML = "Enrolled "+ student;
})



// arithmetic expression is a combination of ..
//  operands (values, variables, etc.)
//   operators (+ - * / %)
//    that can be evaluated to a value
//     ex. y = x + 5;

//students = students + 1; 
//students = students - 1;
 //students = students * 2;
 //students = students / 2;
 //let extraStudents = students % 2; 
 //students += 1;
//students -= 1;
 //students *= 2; 
//students /= 2;


let result = (1+14)*(2);
console.log(result);
