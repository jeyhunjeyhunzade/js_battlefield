// Slice method won’t mutate the original array but it returns the subset as a new array.
// Used to pick the elements from array

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

// Splice method modifies the original array and returns the deleted as array.
// Used to insert or delete elements to/from array

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegers6 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; //original array [3,4,5]
