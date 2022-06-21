function subsetSumEqualToK(ind, k, arr) {
    if (ind === 0) return k === arr[0];
    if (k === 0) return true;

    let take = false;
    // we will move down but target will reamin same as we did not take it
    let notTake = subsetSumEqualToK(ind - 1, k, arr);
    // we can take a value only if it is smaller or eqaul to target => 4 cannot be used to get a target of 3
    if (k >= a[ind]) take = subsetSumEqualToK(ind - 1, k - a[ind], arr);
    return take || notTake;
}


// TC = O(2^N) = 2 choices 
//  Sc = O(N) = recursive space