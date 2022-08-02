
function countWaysToMakeChange(arr, n, T){

    let dp = Array(n).fill().map(ele => Array(T + 1).fill(0))

    //Initializing base condition
    for (let i = 0; i <= T; i++) {
        if (i % arr[0] == 0)
            dp[0][i] = 1;
        // Else condition is automatically fulfilled,
        // as dp array is initialized to zero
    }

    for (let ind = 1; ind < n; ind++) {
        for (let target = 0; target <= T; target++) {
            let notTaken = dp[ind - 1][target];

            let taken = 0;
            if (arr[ind] <= target)
                taken = dp[ind][target - arr[ind]];

            dp[ind][target] = notTaken + taken;
        }
    }

    return dp[n - 1][T];
}


// Time Complexity: O(N*T) - Reason: There are two nested loops

// Space Complexity: O(N*T) - Reason: We are using an external array of size ‘N*T’. Stack Space is eliminated.