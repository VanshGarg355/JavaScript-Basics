// Date(year, month, day, hour, minute, second, ms)

const date = new date(2024, 11, 1, 2, 3, 4, 5);

console.log(date);

const date1 = new Date("2024-01-02T12:00:00Z");

console.log(date1);

const date2 = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);
