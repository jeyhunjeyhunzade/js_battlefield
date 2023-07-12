function test() {
  var message = "hi"; // local variable
}
test();
console.log(message); // error!

function test() {
  message = "hi"; // global variable
}
test();
console.log(message); // "hi"

// let operates in nearly the same way as var,
//but with some important differences. Most notable is that let is block scoped, but var is function scoped.
if (true) {
  var name = "Matt";
  console.log(name); // Matt
}
console.log(name); // Matt
if (true) {
  let age = 26;
  console.log(age); // 26
}
console.log(age); // ReferenceError: age is not defined

//name is hoisted if it's declared with var
console.log(name); // undefined
var name = "blabla";

//name is not hoisted if it's declared with var
console.log(name); // ReferenceError: name is not defined
let name = "blabla";

// var attach to windows because it's global
var name = "Matt";
console.log(window.name); // Matt

let name = "Matt";
console.log(window.name); // undefined

for (var i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// You might expect this to console.log 0, 1, 2, 3, 4
// It will actually console.log 5, 5, 5, 5, 5, because when the timeouts later execute, they reference this same variable, and consequently console.log its final value.

for (let i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// console.logs 0, 1, 2, 3, 4, because behind the scenes the JavaScript engine will actually declare a new iterator variable each loop iteration

let message;
console.log(typeof message); // undefined
console.log(typeof age); // is also undefined

//NaN is not equal to any value, including NaN.
console.log(NaN == NaN); // false

Number(null); //0
parseInt(""); //NaN
parseInt("123blue"); //123
toString(null) | toString(undefined); // they are not available
String(undefined); // 'undefined'
String(null); // 'null'
