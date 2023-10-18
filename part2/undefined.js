let message_; // this variable is declared but has a value of undefined
// make sure this variable isn't declared // let age
console.log(typeof message_); // "undefined"
console.log(typeof age); // "undefined"

// BUT:
let message; // this variable is declared but has a value of undefined // 'age' is not declared
if (message) {
  // This block will not execute
}
if (!message) {
  // This block will execute
}
if (age) {
  // This will throw an error
}
