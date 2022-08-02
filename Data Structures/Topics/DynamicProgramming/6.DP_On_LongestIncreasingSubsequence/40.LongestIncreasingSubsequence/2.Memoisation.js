var lengthOfLIS = function (nums) {
    let dp = Array(nums.length).fill().map(() => Array(nums.length + 1).fill(-1));
    function solve(i, prev) {
        if (i === nums.length) return 0;
        if (dp[i][prev + 1] !== -1) return dp[i][prev + 1]
        let take = -Infinity;
        let notTake = solve(i + 1, prev);
        if (prev === -1 || nums[i] > nums[prev]) {
            take = 1 + solve(i + 1, i);
        }
        dp[i][prev + 1] = Math.max(take, notTake)
        return dp[i][prev + 1]
    }
    return solve(0, -1)
};


// TC = O(N * N)
// SC = O(N * N) + O(N)