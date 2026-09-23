const s1 = {
  firstName: "Vansh",
  lastName: "Garg",
};

const s2 = {
  firstName: "Kashmiri",
  lastName: "Pandit",
};

function introduce(city, age) {
  console.log(
    `Hello, my name is ${this.firstName} ${this.lastName} and I live in ${city}. I am ${age} years old.`,
  );
}

// call()
introduce.call(s1, "Delhi", 24);
introduce.call(s2, "Muzaffarnagar", 25);
