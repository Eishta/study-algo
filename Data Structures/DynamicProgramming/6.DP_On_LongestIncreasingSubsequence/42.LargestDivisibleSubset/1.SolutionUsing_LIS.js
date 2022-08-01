/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = (nums) => {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let dp = Array(n).fill(1); // stores the length of longest subset till index i
    let hash = Array(n).fill(0);  // stores either the location of the prev element if the sequence else the index itself

    let maxIndex = 0;
    for (let i = 1; i < n; i++) {
        hash[i] = i;
        for (let prev = 0; prev < i; prev++) {
            // only if the ele is divisible by the prev ele and the length of the subset increases
            if (nums[i] % nums[prev] === 0 && 1 + dp[prev] > dp[i]) {
                dp[i] = 1 + dp[prev];
                hash[i] = prev
            }
        }
        if (dp[i] > dp[maxIndex]) {
            maxIndex = i;
        }
    }
    let temp = [];
    temp.push(nums[maxIndex]);
    while (maxIndex !== hash[maxIndex]) {
        maxIndex = hash[maxIndex];
        temp.push(nums[maxIndex])
    }
    return temp.reverse();
}


// TC = O(N * N)