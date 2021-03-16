var twoSum = function (nums, target) {
  const twoSums = {}

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (twoSums[diff] !== undefined) {
      return [i, twoSums[diff]]
    } else {
      twoSums[nums[i]] = i
    }
  }
};

let nums1 = [2, 7, 11, 15];

console.log(twoSum(nums1, 9))
