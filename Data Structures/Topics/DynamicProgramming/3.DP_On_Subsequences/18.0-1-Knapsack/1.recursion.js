function knapSack(W, wt, val, n) {
    /**
     * 
     * @param {*} ind -> current index 
     * @param {*} w -> weight left in bag to fill
     * @returns 
     */
    function solve(ind, w){
        if(ind === 0){
            if(wt[ind] <= w) return val[0];
            else return 0;
        }
        let take = -Infinity;
        if(wt[ind] <= w) take = val[ind] + solve(ind-1, w - wt[ind])
        let notTake = 0 + solve(ind -1, w);
        return Math.max(take, notTake);
    }

    return solve(n-1, W)
}


// TC = O(2^N) = 2 choices 
//  Sc = O(N) = recursive space
