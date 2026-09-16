// ES6 Module = An external filej that contains reusable code that can be imported into other JavaScript files. Write reusable code for many different apps. Can contain variables, classes, functions ... and more  Introduced as part of ECMAScript 2015 update

export const PI = 3.14;

export function getCircum(radius) {
  return 2 * PI * radius;
}

export function getVolume(radius) {
  return 4 * PI * radius * radius;
}

export function getArea(radius) {
  return PI * radius * radius;
}
