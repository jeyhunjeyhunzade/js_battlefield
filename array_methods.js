//TODO: create custom map function for array
// Array.forEach “executes a provided function once per array element.”
// Array.map “creates a new array with the results of calling a provided function on every element in this array.”
function customMap(arr, func) {
  let updatedArr = [];
  for (let i = 0; i < arr.length; i++) {
    updatedArr.push(func(arr[i]))
  }
  return updatedArr;
}

const newArr = []

// console.log(customMap([1, 2, 3], (item) => `doubled value: ${item*2}`))
// ------------------

//for in ... => The for...in statement iterates a specified variable over all the enumerable properties of an object.
// For each distinct property, JavaScript executes the specified statements.
function dumpProps(obj, objName) {
    let result = '';
    for (const i in obj) {
      result += `${objName}.${i} = ${obj[i]}<br>`;
    }
    result += '<hr>';
    return result;
}

const car = {make: "BMW", model: "M5"}

// console.log(dumpProps(car, "car"));
// ---------------

// The following example shows the difference between a for...of loop and a for...in loop. 
// While for...in iterates over property names, for...of iterates over property values:
const arr = [3, 5, 7];
arr.foo = 'hello';

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7
// ------------------


//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const someArr = ["a", "b", "c"]

const iterator = someArr.entries()
let i = 0
for (let i=0; i < someArr.length; i++) {
    // console.log(iterator.next().value)
}

