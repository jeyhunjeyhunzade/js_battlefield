//you can, but shouldn't do (gotta write as var x = "happy")
x = "happy";


//some other cases that you shouldn't do

// Setting a function with the same parameter names
function funny(a, a) {
    console.log("happy")
}

// Establishing an object with the same keys.
var x = {a: "happy", a: "cat"};


//Silent failing assignments
NaN = 5;
//or
undefined = 5;

// Deleting plain names or undeletable properties
var x = "happy";
delete x;  //==> What happens to "x"?
//or
delete Object.prototype

//Setting an integer that starts with a zero to a variable
var x = 0123;

//Strict Mode for scripts
'use strict';  //You're in Strict Mode!
var x = "Hello World!";

//Strict Mode for functions
function cool() {
    "use strict";
    // ... your code ...
    // this function is executed in strict mode
}
//anything outside of the function will be in non-strict mod