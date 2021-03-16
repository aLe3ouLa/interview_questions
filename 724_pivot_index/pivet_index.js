/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // Calculate for every pair the left and the right part

  //     let left = 0;
  //     for (let i = 0; i < nums.length; i++) {
  //         let right = 0;
  //         for (let j = i + 1; j < nums.length; j++) {
  //             right += nums[j]
  //         }

  //         if (left === right) {
  //             return i;
  //         }

  //         left += nums[i]
  //     }

  //     return -1;
  let total_nums = 0;
  for (let i = 0; i < nums.length; i++) {
    total_nums += nums[i];
  }

  let left_nums = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left_nums === total_nums - left_nums - nums[i]) {
      return i;
    }
    left_nums += nums[i];
  }

  return -1
};
