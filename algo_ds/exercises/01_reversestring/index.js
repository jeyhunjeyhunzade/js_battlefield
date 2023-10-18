// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // my first solution:
  if (false) {
    let strLen = str.length - 1;
    let reversedStr = "";
    for (strLen; strLen >= 0; strLen--) {
      reversedStr += str[strLen];
    }
    return reversedStr;
  }

  // for of (do not use use simple for loop, use this instead!!!)
  if (false) {
    return str.split("").reverse().join("");
  }

  if (false) {
    let reversed = "";

    for (let character of str) {
      reversed = character + reversed;
    }

    return reversed;
  }

  // .reduce() solution
  if (true) {
    return str
      .split("")
      .reduce((reversed, character) => character + reversed, "");
  }
}

module.exports = reverse;
