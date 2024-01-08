{
  //my first solution
  var containsDuplicate = function (nums) {
    let numsMap = {};

    for (num of nums) {
      if (numsMap[num]) {
        numsMap[num]++;
      } else {
        numsMap[num] = 1;
      }
    }

    for (numChar of Object.keys(numsMap)) {
      if (numsMap[numChar] !== 1) {
        return true;
      }
    }

    return false;
  };
}

{
  // set solution
  function setSolution(nums) {
    let testSet = new Set(nums);
    return testSet.size !== nums.length;
  }
}
