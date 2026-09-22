const e = require("express");
const res = require("express/lib/response");
const { resolve } = require("node:dns");

const Promise = new promiseHooks((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("operation done");
  } else {
    reject("fail");
  }
});

promiseHooks
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
