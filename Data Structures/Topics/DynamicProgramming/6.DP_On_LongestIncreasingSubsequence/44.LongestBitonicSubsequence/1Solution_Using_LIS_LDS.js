const longestBitonicSubsequence = (nums) => {
    let n = nums.length;
    let dp1 = Array(n).fill(1);
    let dp2 = Array(n).fill(1);
    let max = 1;
    for (let i = 1; i < n; i++) {
        for (let prev = 0; prev < i; prev++) {
            if (nums[prev] < nums[i] && 1 + dp1[prev] > dp1[i]) {
                dp1[i] = 1 + dp1[prev];
            }
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let prev = n - 1; prev > i; prev--) {
            if (nums[prev] < nums[i] && 1 + dp2[prev] > dp2[i]) {
                dp2[i] = 1 + dp2[prev];
            }
        }
    }

    for (let i = 0; i < n; i++) {
        max = Math.max(max, dp1[i] + dp2[i] - 1)
    }
    return max;
}

// longestBitonicSubsequence([1,2,4,3,5]) => 4