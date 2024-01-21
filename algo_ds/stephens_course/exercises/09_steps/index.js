// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  // solution 1: iterative
  if (false) {
    for (let row = 0; row < n; row++) {
      let stair = "";

      for (let column = 0; column < n; column++) {
        if (column <= row) {
          stair += "#";
        } else {
          stair += " ";
        }
      }

      console.log(stair);
    }
  }

  // solution: recursive
  if (true) {
    // 1. Base Case
    if (row === n) {
      return;
    }

    // 2. Recursive
    // print the stair and pass to the next row
    if (stair.length === n) {
      console.log(stair);
      return steps(n, row + 1);
    }

    // stair or empty string
    if (stair.length <= row) {
      stair += "#";
    } else {
      stair += " ";
    }

    // recurse
    steps(n, row, stair);
  }
}

module.exports = steps;
