var topKFrequent = function (nums, k) {
  const numberFrequencyMap = {};

  for (num of nums) {
    if (!numberFrequencyMap[num]) {
      numberFrequencyMap[num] = 1;
    } else {
      numberFrequencyMap[num]++;
    }
  }

  return Object.keys(numberFrequencyMap)
    .sort((a, b) => (numberFrequencyMap[a] > numberFrequencyMap[b] ? -1 : 1))
    .slice(0, k);
};
