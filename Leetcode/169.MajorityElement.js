// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.

var majorityElement = function (nums) {
    let map = new Map();
    let size = Math.floor(nums.length / 2);
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
        if (map[nums[i]] > size) return nums[i];
    }
};