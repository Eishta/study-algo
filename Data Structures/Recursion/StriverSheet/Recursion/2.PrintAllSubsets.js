// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.


// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// when you have [], you can push all the elements => loop -> 0 to length -1
// [1] => loop from index 1 to length - 1 => elements = [2,3] => [1,2] and [1,3] => [1,2,3]
// [2] => loop from index 2 to length - 1 => elements = [3]
// [3] => loop from 3 to lengt -1 => [] => no element left

var subsets = function (nums) {
    let res = [];
    function solve(ds, ind) {
        res.push([...ds])
        for (let i = ind; i < nums.length; i++) { 
            ds.push(nums[i]); // pick the current element
            solve(ds, i + 1);
            ds.pop();  // not pick
        }
    }
    solve([], 0);
    return res
};
// TC = O(n * 2^n)
// SC = O(n * 2^n)