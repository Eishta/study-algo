var lengthOfLIS = function (nums) {
    let dp = Array(nums.length).fill(1);
    let max = 1;
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        for (let prev = 0; prev < i; prev++) {
            if (nums[prev] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[prev])
                max = Math.max(max, dp[i])
            }
        }
    }
    return max;
};
// TC = O(N*N)
// SC = O(N)