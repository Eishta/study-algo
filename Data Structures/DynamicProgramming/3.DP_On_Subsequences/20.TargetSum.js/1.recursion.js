

function solve(ind, sum, arr) {
    if (ind === 0) {
        if (sum == 0 && a[0] == 0) return 2; // 0 can be taken or not taken
        if (sum == 0 || sum == arr[0]) return 1; // if sum == 0, not taken => 1, if sum == arr[0] , take == 1
        return 0;
    }
    let take = 0;
    // we will move down but target will reamin same as we did not take it
    let notTake = solve(ind - 1, sum, arr);
    // we can take a value only if it is smaller or eqaul to target => 4 cannot be used to get a target of 3
    if (sum >= a[ind]) take = solve(ind - 1, sum - a[ind], arr);
    return take + notTake;
}
return solve(arr.length - 1, sum)



function targetSum(target, arr) {

    let totalSum = 0;
    totalSum = arr.reduce((a, b) => a + b, 0);

    if ((totalSum - target) % 2 == 1) return 0; // it should be even not odd
    if ((totalSum - target) < 0) return 0; // should be positive 

    let s2 = (totalSum - target) / 2; // now s2 becomes the target

    // find the number of ways s2 can be achieved
    return solve(arr.length - 1, s2, arr)

}


// TC = O(2^N) = 2 choices
//  Sc = O(N) = recursive space

