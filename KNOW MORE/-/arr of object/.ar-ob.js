const { cpSync } = require("node:fs");

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

console.log(fruits[1].name);

fruits.push({ nmae: "grapes", color: "green", calories: 62 });

console.log(fruits);

fruits.pop();

fruits.splice(1, 2);

console.log(fruits);

//forEach();

fruits.forEach((fruit) => console.log(fruit.calories));

//map

const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);
const fruitCalories = fruits.map((fruit) => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitColors);

// filter

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

console.log(yellowFruits);

// reduce

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max,
);

console.log(maxFruit);
