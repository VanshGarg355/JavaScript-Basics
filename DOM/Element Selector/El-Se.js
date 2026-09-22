// element selectors = Methods used to target and manipulate HTML elements They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

//1. document.getElementById()        // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()        // ELEMENT OR NULL
// 5. document.querySelectorAll()     // NODELIST
//ex-1
const myHeading = document.getElementById("my-heading ");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

//ex-2

const fruits = document.getElementsByClassName("fruits");

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});

//ex-3

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

Array.from(h4Elements).forEach((h4Element) => {
  h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach((liElement) => {
  liElement.style.backgroundColor = "lightgreen";
});

//ex-4

const element = document.querySelector("ol");

console.log(element);

//ex-5
const foods = document.querySelectorAll("li");

foods.forEach((food) => {
  food.style.backgroundColor = "yellow";
});
