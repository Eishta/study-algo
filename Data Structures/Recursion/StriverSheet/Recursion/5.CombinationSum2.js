// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [ [1,1,6], [1,2,5], [1,7], [2,6] ] => there are no duplicate [1,7] and [1,2,5]

var combinationSum2 = function (candidates, target) {
    let ans = [];
    candidates.sort((a, b) => a - b)
    function solve(ind, sum, ds) {

        if (sum === 0) {
            ans.push([...ds]);
            return;
        }

        for (let i = ind; i < candidates.length; i++) {
            if (candidates[i] > sum) break;
            if (i > ind && candidates[i] === candidates[i - 1]) continue;
            ds.push(candidates[i]);
            solve(i + 1, sum - candidates[i], ds);
            ds.pop();
        }
    }
    solve(0, target, [])
    return ans
};

// TC = O(2^n * k)
// Reason: Assume if all the elements in the array are unique then the no. of subsequence you will get will be O(2^n). we also add the ds to our ans when we reach the base case that will take “k”//average space for the ds.

// SC :O(k*x)  if we have x combinations then space will be x*k where k is the average length of the combination.