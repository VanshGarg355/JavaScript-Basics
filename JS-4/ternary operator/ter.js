// ternary operator = a shortcut to if{} and else{} statements helps to assign a variable based on a condition
//condition ? codeIfTrue : codeIfFalse;

let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);


let time=16;
let greeting=time<12 ? "good morning" : " good afternoon";
consloe.log(greeting);


let isstudent =true;g
let answer = isstudent ?  "you are not a sutdent" : "you are not a sutdent";
console.log(answer);

//swith case

//conditional switch case
let day=8;
switch(day){
    case 1:
        console.log("Monday");
    break;
     case 2:
        console.log("Tuesday");
    break;
     case 3:
        console.log("Wednesday");
    break;
     case 4:
        console.log("Thrusday");
    break;
     case 5:
        console.log("Friday");
    break;
     case 6:
        console.log("Saturday");
    break;
     case 7:
        console.log("Sunday");
    break;
    default:console.log("error")
}




//other example
let testScore = 92;
let letterGrade;

switch(true){
case testScore >= 90:
letterGrade = "A";
break;
case testScore >= 80:
letterGrade = "B";
break;
}
console.log(letterGrade);