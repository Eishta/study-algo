var lengthOfLIS = function (nums) {
    let dp = Array(nums.length + 1).fill().map(() => Array(nums.length + 1).fill(0));
    let n = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let prev = i - 1; prev >= -1; prev--) {
            let take = -Infinity;
            let notTake = dp[i + 1][prev + 1];
            if (prev === -1 || nums[i] > nums[prev]) {
                take = 1 + dp[i + 1][i + 1];
            }
            dp[i][prev + 1] = Math.max(take, notTake)
        }
    }
    return dp[0][0];
};


// TC = O(N * N)
// SC = O(N * N)