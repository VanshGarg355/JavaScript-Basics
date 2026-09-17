const result = require("express/lib/response");

function s1() {
  return Promise.resolve(10);
}

s1()
  .then((result) => {
    console.log("step 1", result);
    return result + 10;
  })
  .then((result) => {
    console.log("step 2", result);
  })
  .catch((error) => {
    console.log("error", error);
  });
