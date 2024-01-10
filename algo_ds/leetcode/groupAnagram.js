var groupAnagrams = function (strs) {
  const map = {};

  for (str of strs) {
    const sortedStr = [...str].sort().join();
    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }
    map[sortedStr].push(str);
  }

  return Object.values(map);
};
