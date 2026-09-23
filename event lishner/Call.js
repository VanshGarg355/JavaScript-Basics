const s1 = {
  firstName: "vansh",
  lastName: "garg",
  age: 19,
};

const s2 = {
  firstName: "kashmiri",
  lastName: "pandit",
  age: 21,
};

function introduce(city) {
  console.log(
    `Hello, my name is ${firstName} ${this.lastName} and i live in ${city}`,
  );
}

introduce.call(s1, "delhi");
introduce.call(s2, "MZN");
