// string methods = allow you to manipulate and work with text (strings)

let userName = "  BroCode  ";

console.log(userName.lastIndexOf("o"));

console.log(userName.length);

userName=userName.trim();
// userName=userName.toUpperCase();
// userName=userName.toLocaleLowerCase();
// userName=userName.repeat(3);

console.log(userName);

let result1 = userName.startsWith(" ");
console.log(result1);

let result2 = userName.endsWith(" ");
console.log(result2);





let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "/");
phoneNumber = phoneNumber.padStart(15,"0");
phoneNumber = phoneNumber.padEnd(16, "1");


console.log(phoneNumber);



// STRING SLICING

// string slicing = creating a substring from a portion of another string

//string.slice(start, end)

const fullName = "Broshep Code";

let firstName = fullName.slice(0,3);
let lastName = fullName.slice(4,8);

console.log(firstName);
console. log(lastName);

let firstchar =fullName.slice(0,-1);
let lastchar = fullName.slice(-1);

console.log(firstchar);
console. log(lastchar);

let fName =fullName.slice(0, fullName.indexOf(" "));
let lName =fullName.slice(fullName.indexOf(" ")+1);

console.log(fName);
console. log(lName);






