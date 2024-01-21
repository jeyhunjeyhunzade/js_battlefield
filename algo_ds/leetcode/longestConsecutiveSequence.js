function longestConsecutive(nums) {
  if (nums == null || nums.length === 0) return 0;

  const numsSet = new Set(nums);
  let max = 0;

  for (let num of numsSet) {
    if (numsSet.has(num - 1)) continue;

    let currNum = num;
    let currMax = 1;

    while (numsSet.has(currNum + 1)) {
      currNum++;
      currMax++;
    }

    max = Math.max(max, currMax);
  }

  return max;
}
