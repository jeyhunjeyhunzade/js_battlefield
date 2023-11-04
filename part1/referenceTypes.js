const arrayLikeObject = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
};
alert(Array.from(arrayLikeObject)); // [1, 2, 3, 4]

// map() will skip the holes entirely
alert(options.map(() => 6)); // [6, undefined, undefined, undefined, 6]

// join() treats holes as empty strings
alert(options.join("-")); // "1----5"

let colors = ["red", "blue", "green"]; // creates an array with three strings
colors.length = 2;
alert(colors[2]); // undefined

let colors = ["red", "green", "blue"];
let removed = colors.splice(0, 1); // remove the first item
alert(colors); // green,blue
alert(removed); // red - one item array

removed = colors.splice(1, 0, "yellow", "orange"); // insert two items at position 1
alert(colors); // green,yellow,orange,blue
alert(removed); // empty array

removed = colors.splice(1, 1, "red", "purple"); //insert two values, remove one
alert(colors); //green,red,purple,orange,blue
alert(removed); //yellow - one item array

// Predicate search
const people = [
  {
    name: "Matt",
    age: 27,
  },
  {
    name: "Nicholas",
    age: 29,
  },
];

/*
The find() method of Array instances returns the first element in the provided array 
that satisfies the provided testing function. The findIndex() returns the index 
of the first element that satisfies the provided testing function
*/
alert(people.find((element, index, array) => element.age < 28)); // {name: "Matt", age: 27}
alert(people.findIndex((element, index, array) => element.age < 28)); // 0
