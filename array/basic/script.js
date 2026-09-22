 // array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

fruits[3] = "grapes";
 // or fruits.push("grapes");
 // fruits.pop(); // removes the last element of the array
 // fruits.shift(); // removes the first element of the array
 // fruits.unshift("kiwi"); // adds an element to the beginning of the array
 // fruits.splice(1, 1); // removes the element at index 1
 // fruits.splice(1, 0, "kiwi"); // adds an element at index 1
// fruits.splice(1, 1, "kiwi"); // replaces the element at index 1 with "kiwi"


console. log(fruits [0]);
console. log(fruits [1]);
console. log(fruits [2]);
console. log(fruits[3]);

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for(let i =fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

for(let fruit of fruits) {
    console.log(fruit);
}


fruits.sort(); // sorts the array in ascending order
fruits.reverse(); // reverses the array

console.log(fruits);