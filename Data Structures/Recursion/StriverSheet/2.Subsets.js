// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.


// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
var subsets = function(nums) {
    let res = [];
    function solve(ds, ind){
        res.push([...ds])
        for(let i = ind;i<nums.length;i++){
            ds.push(nums[i]);     
            solve(ds, i + 1);
            ds.pop();
        }
    }
    solve([], 0);
    return res
};
// TC = O(n * 2^n)
// SC = O(n * 2^n)