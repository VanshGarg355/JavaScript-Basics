// how we accept user input 
// 1 easy way = window prompt 
//2 professional way = html textbook

//m-1
// let username;
// username = window.prompt("whats your username?")
// confirm.log(username);

//m-2
let username;

document.getElementById("mysubmit").onclick = function () {
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `hello ${username}`;
}

//TYPE CONVERSION
//change the data type of a value to anotehr (strings , numbers, booleans)


let age = window.prompt("How old are you?");
age+=1;
console.log (age,typeof age);



//const = a variable that can not be changed

let pi =3.14;
let radius;
let circumferance;

radius=window.prompt("enter the radius of the circle");

radius=Number(radius);
circumferance = 2*pi*radius;
console.log(circumferance);






