//remove dublicate nums from array (which is sorted by increasing)
const removeDuplicates = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};