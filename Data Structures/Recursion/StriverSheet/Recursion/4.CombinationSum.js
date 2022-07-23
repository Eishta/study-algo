// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target.
//  You may return the combinations in any order.

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

var combinationSum = function (candidates, target) {
    let ans = [];

    function solve(ind, sum, ds) {
        if (ind === candidates.length) {
            if (sum === 0) {
                ans.push([...ds]);
            }
            return;
        }

        if (candidates[ind] <= sum) {
            ds.push(candidates[ind])
            solve(ind, sum - candidates[ind], ds)
            ds.pop()
        }
        solve(ind + 1, sum, ds);
    }
    solve(0, target, [])
    return ans
};



// TC = (2 ^ t * k) ,where t is the target, k is the average length
// Assume that there is 1 and the target you want to reach is 10 so 10 times you can “pick or not pick” an element. 
// Space Complexity: O(k*x), k is the average length and x is the no. of combinations