/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  let leftMult = 1;
  let rightMult = 1;

  // from right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = rightMult;
    rightMult *= nums[i];
  }

  // from left to right
  for (let j = 0; j < nums.length; j++) {
    result[j] *= leftMult;
    leftMult *= nums[j];
  }

  return result;
};
