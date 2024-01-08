{
  // my first solution
  var isAnagram = function (s, t) {
    const charMapS = buildCharMap(s);
    const charMapT = buildCharMap(t);

    if (s.length !== t.length) {
      return false;
    }

    for (char of Object.keys(charMapS)) {
      if (charMapS[char] !== charMapT[char]) {
        return false;
      }
    }

    return true;
  };

  function buildCharMap(str) {
    const charMap = {};
    for (char of [...str].sort()) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }

    return charMap;
  }
}

{
  // second solution with .sort
  var isAnagram = function (s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const sortedS = [...s].sort().join("");
    const sortedT = [...t].sort().join("");

    return sortedS === sortedT;
  };
}
