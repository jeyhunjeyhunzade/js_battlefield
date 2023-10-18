// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // for of solution
  if (false) {
    let reversed = "";

    for (const character of str) {
      reversed = character + reversed;
    }

    return reversed === str;
  }

  // Array.prototype.reverse() solution
  if (false) {
    const reversed = str.split("").reverse().join("");

    return reversed === str;
  }

  // Array.prototype.reduce() solution
  if (false) {
    const reversedStr = str
      .split("")
      .reduce((reversed, character) => character + reversed, "");

    return reversedStr === str;
  }

  // Array.prototype.every() solution
  if (true) {
    return str.split("").every((char, i) => {
      return char === str[str.length - i - 1];
    });
  }
}

module.exports = palindrome;
