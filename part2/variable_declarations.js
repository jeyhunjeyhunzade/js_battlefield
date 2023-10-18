function test() {
  var message = "hi"; // local variable
}
test();
console.log(message); // error!

function test() {
  message = "hi"; // global variable
}
test();
console.log(message); // "hi" // in strict mode it will throw ReferenceError: message is not defined

//----------------------------------------------------------------

/* var hoisting */
function foo() {
  console.log(age);
  var age = 26;
}
foo(); // undefined
// This does not throw an error because the ECMAScript runtime technically treats it like this:
function foo() {
  var age;
  console.log(age);
  age = 26;
}
foo(); // undefined

if (false) {
  var name;
  let name; // SyntaxError

  let age;
  var age; // SyntaxError
}

//----------------------------------------------------------------

// name is hoisted
console.log(namex); // undefined
var namex = "Matt";

// age is not hoisted
console.log(age); // ReferenceError: age is not defined
let age = 26;

//----------------------------------------------------------------
var name = "Matt";
console.log(window.name); // 'Matt'

let age = 26;
console.log(window.age); // undefined

//----------------------------------------------------------------
for (var i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// You might expect this to console.log 0, 1, 2, 3, 4
// It will actually console.log 5, 5, 5, 5, 5

for (let i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// console.logs 0, 1, 2, 3, 4

//----------------------------------------------------------------
for (const i = 0; i < 10; ++i) {} // TypeError: assignment to constant variable
