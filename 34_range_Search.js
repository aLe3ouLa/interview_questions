//34. Find First and Last Position of Element in Sorted Array

/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
*/

const searchRange = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low+high)/2);
        if (nums[mid] === target){
            let lowMid = mid;
            let highMid = mid;

            while (nums[lowMid] === target) {
                lowMid = lowMid - 1;
            }

            while (nums[highMid] === target) {
                highMid = highMid + 1;
            }
            return [lowMid + 1, highMid - 1]
        }
        else if (nums[mid] <  target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    return [-1, -1]

};

const arr = [5,7,7,8,8,10]
const target = 8;

const result = searchRange(arr, target); // [3,4]
