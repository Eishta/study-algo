const numberOfLIS = (nums) => {
    let n = nums.length;
    let dp = Array(n).fill(1);
    let cnt = Array(n).fill(1);
    let max = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && 1 + dp[j] > dp[i]) {
                // inherit
                dp[i] = 1 + dp[j];
                cnt[i] = cnt[j];
            } else {
                // increase the count
                cnt[i] += cnt[j];
            }
        }
        max = Math.max(max, dp[i])
    }
    let num = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] === max) {
            num += cnt[i]
        }
    }
    return num;
}