function minimumSubsetDiffernce(arr) {
    let k = arr.reduce((acc, ele) => acc + ele, 0);

    let dp = Array(arr.length).fill().map(() => Array(k + 1).fill(false));
    // base case => target =0 
    for (let i = 0; i < arr.length; i++) {
        dp[i][0] = true;
    }
    // on index = 0, if target== a[0] retun 0, dont need to loop for all the target values
    if (a[0] <= k) dp[0][k] = true;

    for (let i = 1; i < arr.length; i++) {
        for (let target = 1; target <= k; target++) {
            let notTake = dp[i - 1][target];
            let take = target - a[i] >= 0 ? dp[i - 1][target - a[i]] : false;
            dp[i][target] = take || notTake;
        }
    }

    let mini = Number.MAX_SAFE_INTEGER;
    let n = arr.length
    // loop through the last row of DP
    for (let i = 0; i <= k; i++) {
        if (dp[n - 1][i] == true) {
            // calculate the diff
            let s1 = i, s2 = k - i;
            mini = Math.min(mini, Math.abs(s1 - s2))
        }
    }

    return mini;

}

// Time Complexity: O(N*K) +O(N) + O(N)
// Reason: There are two nested loops that account for O(N*totSum), at starting we are running a for loop to calculate totSum and at last a for loop to traverse the last row.

// Space Complexity: O(N*K)
// Reason: We are using an external array of size ‘N*K’. Stack Space is eliminated.