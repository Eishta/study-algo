
function countWaysToMakeChange(arr, n, T) {

    let prev = Array(T + 1).fill(0)

    //Initializing base condition
    for (let i = 0; i <= T; i++) {
        if (i % arr[0] == 0)
            prev[i] = 1;
        // Else condition is automatically fulfilled,
        // as dp array is initialized to zero
    }

    for (let ind = 1; ind < n; ind++) {
        let prev = Array(T + 1).fill(0)
        for (let target = 0; target <= T; target++) {
            let notTaken = prev[target];

            let taken = 0;
            if (arr[ind] <= target)
                taken = cur[target - arr[ind]];

            cur[target] = notTaken + taken;
        }
    }

    return dp[n - 1][T];
}


// Time Complexity: O(N * T) - Reason: There are two nested loops.

// Space Complexity: O(T) - Reason: We are using an external array of size ‘T + 1’ to store two rows only.