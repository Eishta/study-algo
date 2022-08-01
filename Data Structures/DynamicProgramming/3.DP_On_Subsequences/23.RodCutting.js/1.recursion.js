function rodCutting(n, price) {
    function solve(ind, lengthOfRod) {
        if (ind === 0) {
            return price[0] * lengthOfRod;
        }
        let take = -Infinity;
        if ((ind + 1) <= lengthOfRod) take = price[ind] + solve(ind, lengthOfRod - (ind + 1))
        let notTake = 0 + solve(ind - 1, lengthOfRod);
        return Math.max(take, notTake);
    }
    return solve(n - 1, n)
}


// TC = exponential
//  Sc = O(W) = as if 1 is the lowest weight in wt array, it can go W times in recursion -> W - 1, then -1 , then -1 .....
