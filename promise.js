// Promise = An Object that manages asynchronous operations. Wrap a Promise Object around {asynchronous code}
//"I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

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
