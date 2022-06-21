function subsetSumEqualToKTab(ind, k, arr) {
    let prev = Array(target).fill(0);
    let cur = Array(target).fill(0);
    // base case => target =0 
    prev[0] = true;
    cur[0] = true
    // on index = 0, if target== a[0] retun 0, dont need to loop for all the target values
    prev[a[0]] = true;

    for (let i = 0; i < arr.length; i++) {
        for (let target = 1; target <= k; target++) {
            let notTake = prev[target];
            let take = target - a[i] >= 0 ? prev[target - a[i]] : false;
            cur[target] = take || notTake;
        }
        prev = cur;
    }
    return prev[k];
}

// TC = O( N * target)
// SC = O(target)