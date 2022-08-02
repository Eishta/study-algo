// Given an array print all the sum of the subset generated from it, in the increasing order.
// Input: N = 3, arr[] = {5,2,1}
// Output: 0,1,2,3,5,6,7,8

// Input: N=3,arr[]= {3,1,2}
// Output: 0,1,2,3,3,4,5,6


function subsetSums(arr, n) {
    let res = [];

    function solve(sum, ind) {

        if (ind === n) {
            res.push(sum);
            return;
        }
        solve(sum + arr[ind], ind + 1);
        solve(sum, ind + 1);
    }
    solve(0, 0);
    return res.sort((a, b) => a - b);  // O(nlogn)
}

// TC = O(2^n) + O(2^nlog(2^n))
// SC = O(2^n)
// Time Complexity: O(2^n)+O(2^n log(2^n)). Each index has two ways. You can either pick it up or not pick it. So for n index time complexity for O(2^n) and for sorting it will take (2^n log(2^n)).
// Space Complexity: O(2^n) for storing subset sums, since 2^n subsets can be generated for an array of size n.