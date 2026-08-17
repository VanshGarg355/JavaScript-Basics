// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max( ... numbers);
let minimum = Math.min( ... numbers);

console.log(minimum);





let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

console.log(foods);

let foods =[ ... fruits, ... vegetables];



// rest parameters = ( ... rest) allow a function work with a variable number of arguments by bundling them into an array

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

function openFridge( ... foods){
console. log( ... foods);
}

function getFood( ... foods){
return foods;
}

const food1 = "pizza";
const food2 ="hamburger";
const food3 ="hotdog";
const food4 ="sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);





//sum of numbers using rest parameters

function sum( ... numbers){
let total = 0;
for(let number of numbers){
total += number;
}
return total;
}

const result = sum(1, 2, 3, 4, 5);
console.log(result);


//average of numbers using rest parameters

function average( ... numbers){
let total = 0;
for(let number of numbers){
total += number;
}
return total / numbers.length;
}

const avg = average(1, 2, 3, 4, 5);
console.log(avg);


//combining strings using rest parameters

function combineStrings( ... strings){
return strings.join(' ');
}

const combined = combineStrings("Hello", "world!", "How", "are", "you?");
console.log(combined);

