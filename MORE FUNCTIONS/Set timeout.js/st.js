// setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time (milliseconds) Times are approximate (varies based on the workload of the JavaScript runtime setTimeout(callback, delay);

const { settings } = require("node:cluster");

function sayHello() {
  window.alert("Hello");
}

setTimeout(sayHello, 3000);

setTimeout(() => {
  window.alert("hii");
}, 40000);

//******CONSOLE TIME */

//console. time() = tool that allows you to measure the time it takes for a section of code or process to execute Great for identifying performance "bottlenecks"

// console.time("label");
// console.timeEnd("label");

console.time("test");

for (let i = 0; i < 100000000; i++) {
  // do some code here
}

console.timeEnd("test");

function loadData() {
  console.time("loaddata");
  for (let i = 0; i < 1000000000; i++) {
    //pretend to load some data
  }
  console.timeEnd("loaddata");
}

function processData() {
  console.time("processdata");

  for (let i = 0; i < 10000000; i++) {
    //pretend to process some data
  }
  console.timeEnd("processdata");
}
