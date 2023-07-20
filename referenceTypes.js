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
