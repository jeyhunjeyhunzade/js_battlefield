//In JavaScript the value of this not refer to the function in which it is used or it’s scope
//but is determined mostly by the invocation context of function (context.function()) and where it is called.
//In most cases, the value of this is determined by how a function is called (runtime binding).

// If the new keyword is used when calling the function, this inside the function is a brand new object.
// If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.
// If a function is called as a method, such as obj.method() — this is the object that the function is a property of.
/* 
  If a function is invoked as a free function invocation, 
  meaning it was invoked without any of the conditions present above, 
  this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), 
  this will be undefined instead of the global object.
*/
// If multiple of the above rules apply, the rule that is higher wins and will set the this value.
/* 
  If the function is an ES2015 arrow function, 
  it ignores all the rules above and receives the this value of its surrounding scope at the time 
  it is created.
*/

function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  console.log(this.a);
}

foo(); //undefined

// 1- Default Binding:
var myFunction = function () {
  console.log(this);
};

myFunction(); // Window

var myFunction = function () {
  console.log(this.a);
};

var a = 5;
myFunction(); //5

// 2- Implicit binding
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

obj.foo(); // 2

var john = {
  name: "John",
  greet: function (person) {
    console.log("Hi " + person + ", my name is " + this.name);
  },
};

john.greet("Mark"); // Hi Mark, my name is John

var fx = john.greet;
fx("Mark"); // Hi Mark, my name is (because it gets invoked at the global scope)

//3- Explicit Binding:
//     call
function greet() {
  console.log(this.name);
}

var person = {
  name: "Alex",
};

greet.call(person, ...args); // Alex

//      apply
function greet() {
  console.log(this.name);
}

var person = {
  name: "Alex",
};

greet.apply(person, [args]); // Alex

// bind  (returns as a function that is borrowed with another object to serve for object we want)
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (args) {
    console.log(args);
    return this.firstName + " " + this.lastName + arg;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member, ", welcome!");
console.log("fullName", fullName());

// 4-new
function Foo() {
  /*
        create a new object using the object literal 
       var this = {};
   */

  // 2- add properties and methods
  this.name = "Osama";
  this.say = function () {
    return "I am " + this.name;
  };

  // return this;
}

var name = "Ahmed";
var result = new Foo();
console.log(result.name); //3

/* 
  So You can use bind to returns a function that you can later execute, 
  but Call/apply use it when you need to call the function immediately.
*/

//if you try to use new before arrow function will give an error.because arrow functions can’t run with new.

//So this in arrow function will always take his value from the outside (Lexical scope).
