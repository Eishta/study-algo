function countSubsets(ind, sum, arr) {

    function solve(ind, sum) {
        if (ind === 0) {
            if (sum == 0 && a[0] == 0) return 2; // 0 can be taken or not taken
            if (sum == 0 || sum == arr[0]) return 1; // if sum == 0, not taken => 1, if sum == arr[0] , take == 1
            return 0;
        }
        let take = 0;
        // we will move down but target will reamin same as we did not take it
        let notTake = solve(ind - 1, sum);
        // we can take a value only if it is smaller or eqaul to target => 4 cannot be used to get a target of 3
        if (sum >= a[ind]) take = solve(ind - 1, sum - a[ind]);
        return take + notTake;
    }
    return solve(arr.length - 1, sum)

}


// TC = O(2^N) = 2 choices
//  Sc = O(N) = recursive space

