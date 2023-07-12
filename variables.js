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

// OPERATORS

// The prefix increment and decrement are equal in terms of order of
// precedence in a statement and are therefore evaluated left to right. Consider this example:
let num11 = 2;
let num22 = 20;
let num33 = --num1 + num2;
let num44 = num1 + num2;
console.log(num33); // 21 console.log(num4);
console.log(num44); // 21

// The postfix versions of increment and decrement use the same syntax (++ and --, respectively)
//  but are placed after the variable instead of before it.
let num1 = 2;
let num2 = 20;
let num3 = num1-- + num2;
let num4 = num1 + num2;
console.log(num3); // 22 console.log(num4); // 21
console.log(num4); // 21

//Booleans
let found = true;
let result = found && someUndeclaredVariable; // error occurs here console.log(result);
console.log(result); // this line never executes

let found2 = false;
let result2 = found2 && someUndeclaredVariable; // no error console.log(result);
console.log(result2); // works, because variable some- UndeclaredVariable is undefined, it is never evaluated because the first operand is false.

let found3 = true;
let result3 = found3 || someUndeclaredVariable; // no error
console.log(result3); // works

let found4 = true;
let result4 = found4 || someUndeclaredVariable; // error occurs here console.log(result);
console.log(result4); // this line never executes

//Equality operators
undefined == 0; // false
null == 0; // false
true == 2; // false

// with Statement

// witout "with"
let qs = location.search.substring(1);
let hostName = location.hostname;
let url = location.href;

// with "with"
with (location) {
  let qs = search.substring(1);
  let hostName = hostname;
  let url = href;
}
//In strict mode, the with statement is not allowed and is considered a syntax error.
