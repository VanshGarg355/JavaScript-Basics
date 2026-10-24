fetch("people.json")
  .then((response) => response.json())
  .then((values) => values.forEach((value) => console.log(value.isEmployed)));

//

const names = ["vansh", "mayank", "varun", "manu"];

const person = {
  name: "vansh",
  age: 30,
  isEmployed: true,
  hobbies: ["Coding", "Gaming", "Designing"],
};

const people = [
  {
    name: "vansh",
    age: 30,
    isEmployed: true,
  },
  {
    name: "mayank",
    age: 34,
    isEmployed: false,
  },
  {
    name: "varun",
    age: 50,
    isEmployed: true,
  },
  {
    name: "manu",
    age: 27,
    isEmployed: false,
  },
];

const jsonString = JSON.stringify(person);

console.log(people);

//

const jsonNames = ["Vansh", "Mayank", "Varun", "Manu"];

const jsonPerson = {
  name: "Vansh",
  age: 19,
  isEmployed: true,
  hobbies: ["Coding", "Gaming", "Badminton"],
};

const jsonPeople = `[
    {"name": "Vansh", "age": 19, "isEmployed": true},
    {"name": "Mayank", "age": 20, "isEmployed": false},
    {"name": "Varun", "age": 18, "isEmployed": true},
    {"name": "Manu", "age": 19, "isEmployed": false}
]`;

const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);
