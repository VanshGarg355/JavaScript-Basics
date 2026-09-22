
// while loop = repeat some code WHILE some condition is true

let username = "";

while(username ==="" || username === null){ 
username = window.prompt("Enter your name" );
}

console.log(`Hello ${username}`);


//DO WHILE 
let usernaam;

do{
    (usernaam ==="" || usernaam === null)
}while (usernaam = window.prompt("Enter your name" ));


console.log(`Hello ${usernaam}`);


//for loop = repeat some code a limited amount of times

for (let i=0;i<=2;i++){
console.log(i);
}
console.log("happy new year");



for(let j=1;;j+2){  //it's consider infinite 
    console.log(j);
    if(j>10){
        break;
    }
}

for(;;){  //it's consider infinite 
    console.log(j);
    if(j>10){
        break;
    }
    console.log(j);
    j+=2;
}


let sum=0;
for(let i=0;i<=9;i++,sum+=i);
console.log(sum);