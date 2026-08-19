// function = A section of reusable code. Declare code once, use it whenever you want. Call the function to execute that code.

function happybirthday(username,age ){
    console.log('Happy birthday dear');
    console.log(`happy birthday to you dear ${username} you are now ${age} years old!`);
}
happybirthday("Vansh", 17);

//add
function add(x,y){
    let result = x + y;
    return result;
}
let answer = add(5,10);
console.log(answer);

//subtract
function subtract(x,y){
    let result = x - y;
    return result;
}
let answer2 = subtract(10,5);
console.log(answer2);

//multiply
function multiply(x,y){
    let result = x * y;
    return result;
}
let answer3 = multiply(5,10);
console.log(answer3);

//divide
function divide(x,y){
return  x / y;
}
console.log( divide(10,5));

//even or odd
function evenodd(num){
    if(num%2==0){
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenodd(5));

//email validator
function isvalidemail(email){
    return email.includes("@") && email.includes(".") ? true : false;
}
console.log(isvalidemail("vanshgarg@gmail.com"));