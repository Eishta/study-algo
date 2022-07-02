function knapSack(W, wt, val, n) {
    let prev = Array(W + 1).fill(0);
    let cur = Array(W + 1).fill(0);

    for (let i = wt[0]; i <= W; i++) {
        prev[i] = val[0];
    }

    for (let i = 1; i < n; i++) {
        for (let w = W; w >= 0; w--) {
            let notTake = 0 + prev[w];
            let take = -Infinity;
            if (wt[i] <= w) {
                take = val[i] + prev[w - wt[i]]
            }
            prev[w] = Math.max(take, notTake)
        }
    }
    return prev[W]
}


// TC = O(n * W) => traversal
//  Sc = O(W) = prev

// only one row is used as we only need the elements before w of the prev row ,
//  so we traverse from back so that the values from 0 to w => left part are from prev row
//  and the values from w to W => right are the cur row values 