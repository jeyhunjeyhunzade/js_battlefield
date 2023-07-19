const arrayLikeObject = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
};
alert(Array.from(arrayLikeObject)); // [1, 2, 3, 4]
