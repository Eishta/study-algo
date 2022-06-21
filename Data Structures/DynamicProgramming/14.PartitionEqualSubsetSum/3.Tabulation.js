function canPartitionTab(arr) {
    let sum = arr.reduce((acc, ele) => acc + ele, 0);

    if (sum % 2 == 1) return false;
    else {
        let k = sum/2;
        let dp = Array(arr.length).fill().map(() => Array(k+1).fill(-1));
        // base case => target =0 
        for (let i = 0; i < arr.length; i++) {
            dp[i][0] = true;
        }
        // on index = 0, if target== a[0] retun 0, dont need to loop for all the target values
        if (a[0] < k) dp[0][a[0]] = true;
    
        for (let i = 1; i < arr.length; i++) {
            for (let target = 1; target <= k; target++) {
                let notTake = dp[i - 1][target];
                let take = target - a[i] >= 0 ? dp[i - 1][target - a[i]] : false;
                dp[i][target] = take || notTake;
            }
        }
        return dp[arr.length - 1][k - 1];
    }

}

// Time Complexity: O(N*K) +O(N)

// Reason: There are two nested loops that account for O(N*K) and at starting we are running a for loop to calculate totSum.

// Space Complexity: O(N*K)

// Reason: We are using an external array of size ‘N*K’. Stack Space is eliminated.