function subsetSumEqualToKMemo(ind, k, arr) {
    let dp = Array(arr.length).fill().map(() => Array(target).fill(-1));

    function solve(ind, k, arr) {
        if (dp[ind][k] !== -1) return dp[ind][k]
        if (ind === 0) return k === arr[0];
        if (k === 0) return true;

        let take = false;
        // we will move down but target will reamin same as we did not take it
        let notTake = solve(ind - 1, k, arr);
        // we can take a value only if it is smaller or eqaul to target => 4 cannot be used to get a target of 3
        if (k >= a[ind]) take = solve(ind - 1, k - a[ind], arr);
        dp[ind][k] = take || notTake;
        return dp[ind][k]
    }
    return solve(ind, k, arr);
}


// TC = O(N * taregt) => traverse all the cells of dp
//  Sc = O(N * target) = dp space + O(N) =recursive space