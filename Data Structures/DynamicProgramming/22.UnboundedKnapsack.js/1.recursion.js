function unboundedKnapSack(W, wt, val, n) {

    function solve(ind, w) {
        if (ind === 0) {
            return Math.floor(w / wt[0]) * val[0]
        }
        let take = -Infinity;
        if (wt[ind] <= w) take = val[ind] + solve(ind, w - wt[ind])
        let notTake = 0 + solve(ind - 1, w);
        return Math.max(take, notTake);
    }

    return solve(n - 1, W)
}


// TC = exponential 
//  Sc = O(W) = as if 1 is the lowest weight in wt array, it can go W times in recursion -> W - 1, then -1 , then -1 .....
