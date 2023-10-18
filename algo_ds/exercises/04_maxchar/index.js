// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  if (true) {
    const charMap = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
      //   if (!chars[char]) {
      //     chars[char] = 1;
      //   } else {
      //     chars[char]++;
      //   }

      // one line version of above one:
      charMap[char] = charMap[char] + 1 || 1;
    }

    for (let item in charMap) {
      if (charMap[item] > max) {
        max = charMap[item];
        maxChar = item;
      }
    }

    return maxChar;
  }
}

module.exports = maxChar;
