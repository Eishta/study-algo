// Given an array of integers that may contain duplicates the task is to return all possible subsets. Return only unique subsets and they can be in any order.
// Link - https://leetcode.com/problems/subsets-ii/

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Input: nums = [0]
// Output: [[],[0]]


var subsetsWithDup = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b)
    function solve(ind, ds,) {
        console.log(ds, ind)
        res.push([...ds]);
        for (let i = ind; i < nums.length; i++) {
            if (i !== ind && nums[i] === nums[i - 1]) continue;
            ds.push(nums[i]);
            solve(i + 1, ds);
            ds.pop();
        }
    }
    solve(0, [])
    return res
};

// TC = O(n * 2^n)
// SC = O(n * 2^n)