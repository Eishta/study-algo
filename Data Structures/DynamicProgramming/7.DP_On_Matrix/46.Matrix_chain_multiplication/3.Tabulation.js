const mcm = nums => {
    let n = nums.length;
    let dp = Array(n).fill().map(() => Array(n).fill(0));

    for (let i = n - 1; i >= 1; i--) {
        for (let j = i + 1; j < n; j++) {
            let min = Infinity
            for (let k = i; k < j; k++) {
                let steps = nums[i - 1] * nums[k] * nums[j] + dp[i][k] + dp[k + 1][j];
                if (steps < min) min = steps;
            }
            dp[i][j] = min;
        }

    }
    return dp[1][n - 1];
}