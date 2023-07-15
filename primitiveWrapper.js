let s1 = "some text";
s1.color = "red";
console.log(s1.color); // undefined

let obj = new Object("some text");
console.log(obj instanceof String); // true

let value = "25";
let number = Number(value); // casting function
console.log(typeof number); // "number"
let obj2 = new Number(value); // constructor
console.log(typeof obj); // 'object'

let stringValue = "hello world";
console.log(stringValue.slice(3)); // "lo world"
console.log(stringValue.substring(3)); // "lo world"
console.log(stringValue.substr(3)); // "lo world"
console.log(stringValue.slice(3, 7)); // "lo w"
console.log(stringValue.substring(3, 7)); // "lo w"
console.log(stringValue.substr(3, 7)); // "lo worl" => because the second argument specifies the number of characters to return.

console.log(stringValue.slice(-3)); // "rld"
console.log(stringValue.substring(-3)); // "hello world"
console.log(stringValue.substr(-3)); // "rld"
console.log(stringValue.slice(3, -4)); // "lo w"
console.log(stringValue.substring(3, -4)); // "hel"
console.log(stringValue.substr(3, -4)); // "" (empty string)

let color = "red"; // color is in global env
function sayColor() {
  console.log(window.color);
}
window.sayColor(); // "red"

// Math random
function selectFrom(lowerValue, upperValue) {
  let choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}
let num = selectFrom(2, 10);
console.log(num); // number between 2 and 10, inclusive
