function countSubsets(sum, arr) {
    let dp = Array(arr.length).fill().map(() => Array(sum + 1).fill(-1))
    function solve(ind, sum) {
        if (ind === 0) return sum === arr[0] ? 1 : 0;
        if (sum === 0) return 1;
        if (dp[ind][sum] !== -1) return dp[ind][sum]
        let take = 0;
        // we will move down but target will reamin same as we did not take it
        let notTake = countSubsets(ind - 1, sum, arr);
        // we can take a value only if it is smaller or eqaul to target => 4 cannot be used to get a target of 3
        if (sum >= a[ind]) take = countSubsets(ind - 1, sum - a[ind], arr);

        dp[ind][sum] = take + notTake;
        return dp[ind][sum];
    }
    return solve(arr.length - 1, sum)

}


// Time Complexity: O(N*K)

// Reason: There are N*K states therefore at max ‘N*K’ new problems will be solved.

// Space Complexity: O(N*K) + O(N)

// Reason: We are using a recursion stack space(O(N)) and a 2D array ( O(N*K)).