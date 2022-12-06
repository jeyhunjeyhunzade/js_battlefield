const twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        const currentNum = nums[i];
        for(let y=i+1; y<nums.length; y++) {
            const expectedSum = currentNum + nums[y];
            if (expectedSum == target) {
                return [i, y]
            }
        }
    }
};

twoSum([2,7,11,15], 9)