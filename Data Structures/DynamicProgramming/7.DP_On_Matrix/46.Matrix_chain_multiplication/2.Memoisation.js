const mcm = (nums) => {
    let dp = Array(nums.length).fill().map(() => Array(nums.length).fill(-1))
    function solve(i, j) {
        if (i === j) return 0;
        if (dp[i][j] !== -1) return dp[i][j];
        let min = Infinity
        for (let k = i; k < j; k++) {
            let steps = nums[i - 1] * nums[k] * nums[j] + solve(i, k) + solve(k + 1, j);
            min = Math.min(min, steps);
        }
        dp[i][j] = min;
        return min;
    }
    return solve(1, nums.length - 1)
}

// TC = O(N*N) * N => approx O(N^3)
// SC = O(N^2) + O(N) aux