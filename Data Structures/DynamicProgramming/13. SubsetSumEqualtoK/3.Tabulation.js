function subsetSumEqualToKTab(ind, k, arr) {
    let dp = Array(arr.length).fill().map(() => Array(target).fill(-1));
    // base case => target =0 
    for (let i = 0; i < arr.length; i++) {
        dp[i][0] = true;
    }
    // on index = 0, if target== a[0] retun 0, dont need to loop for all the target values
    dp[0][a[0]] = true;

    for (let i = 1; i < arr.length; i++) {
        for (let target = 0; target < k; target++) {
            let notTake = dp[i-1][target];
            let take = target - a[i] >=0 ? dp[i-1][target-a[i]] : false;
            dp[i][target] = take || notTake;
        }
    }
    return dp[arr.length-1][k-1];
}


// TC = O(N * target) => traverse all the cells of dp
//  Sc = O(N * target) = dp space