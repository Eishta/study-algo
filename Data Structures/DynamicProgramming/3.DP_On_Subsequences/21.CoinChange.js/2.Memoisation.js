
function countWaysToMakeChangeUtil(arr, ind, T, dp) {
    if (ind == 0) {
        return (T % arr[0] == 0);
    }

    if (dp[ind][T] != -1)
        return dp[ind][T];

    notTaken = countWaysToMakeChangeUtil(arr, ind - 1, T, dp);

    taken = 0;
    if (arr[ind] <= T)
        taken = countWaysToMakeChangeUtil(arr, ind, T - arr[ind], dp);

    return dp[ind][T] = notTaken + taken;
}


function countWaysToMakeChange(arr, n, T) {
    let dp = Array(n).fill().map(ele => Array(T + 1).fill(-1))
    return countWaysToMakeChangeUtil(arr, n - 1, T, dp);
}

// Time Complexity: O(N*T) - Reason: There are N*W states therefore at max ‘N*T’ new problems will be solved.

// Space Complexity: O(N*T) + O(N) - Reason: We are using a recursion stack space(O(N)) and a 2D array ( O(N*T)).