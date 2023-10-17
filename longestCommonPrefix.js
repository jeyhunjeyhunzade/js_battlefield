const longestCommonPrefix = function (strs) {
  let output = "";

  for (let y = 0; y < strs[0].length; y++) {
    // if (!strs[0].length) return ""
    let samePrefx;
    for (i = 0; i < strs.length; i++) {
      if (!strs[i].length) return "";
      if (strs[0][y] == strs[i][y]) {
        samePrefx = strs[0][y];
      } else {
        return output;
      }
    }
    output += samePrefx;
  }
  return output;
};

let testArr = ["flower", "", "flower", "flowe"];

console.log(longestCommonPrefix(testArr));

// exceptional case , if array has empty string
