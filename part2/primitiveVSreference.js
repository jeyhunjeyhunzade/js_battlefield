// When an argument is passed by value, the value is copied into a local variable
// (a named argument and, in ECMAScript, a slot in the arguments object)

function addTen(num) {
  num += 10;
  return num;
}
let count = 20;
let result = addTen(count);
console.log(count); // 20 - no change
console.log(result); // 30

//When an argument is passed by reference, the location of the value in memory is stored into a local variable,
// which means that changes to the local variable are reflected outside of the function.
function setName(obj) {
  obj.name = "Nicholas";
}
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"

{
  // When obj is overwritten inside the function, it becomes a pointer to a local object.
  //   That local object is destroyed as soon as the function finishes executing.
  function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
  }
  let person = new Object();
  setName(person);
  console.log(person.name); // "Nicholas"
}
