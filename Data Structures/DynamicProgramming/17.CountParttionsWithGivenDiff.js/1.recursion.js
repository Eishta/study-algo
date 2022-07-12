function countSubsets(ind, sum, arr) {

    function solve(ind, sum) {
        if (ind === 0) return sum === arr[0] ? 1 : 0;
        if (sum === 0) return 1;

        let take = 0;
        // we will move down but target will reamin same as we did not take it
        let notTake = countSubsets(ind - 1, sum, arr);
        // we can take a value only if it is smaller or eqaul to target => 4 cannot be used to get a target of 3
        if (sum >= a[ind]) take = countSubsets(ind - 1, sum - a[ind], arr);
        return take + notTake;
    }
    return solve(arr.length - 1, sum)

}


// TC = O(2^N) = 2 choices
//  Sc = O(N) = recursive space

