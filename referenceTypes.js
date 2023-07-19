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
