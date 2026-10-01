//Async/Await = Async = makes a function return a promise
//  Await = makes an async function wait for a promise
// Allows you write asynchronous code in a synchronous manner Async doesn't have resolve or reject parameters Everything after Await is placed in an event queue

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data mil gaya!");
    }, 2000);
  });
}

async function main() {
  let data = await getData();

  console.log(data);
}

main();

console.log("Hello");
