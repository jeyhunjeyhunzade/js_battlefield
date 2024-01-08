{
  //  my first solution
  for (let i = 0; i < nums.length; i++) {
    for (let y = i + 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === target) {
        return [i, y];
      }
    }
  }
}

{
  // O(n) solution
  const twoSum = function (nums, target) {
    const numsHash = {};

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      if (numsHash[target - num] !== undefined) {
        return [numsHash[target - num], i];
      }

      numsHash[num] = i;
    }

    return [];
  };
}
