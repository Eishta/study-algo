var lengthOfLIS = function (nums) {
    let next = Array(nums.length + 1).fill(0);
    let cur = Array(nums.length + 1).fill(0);
    let n = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let prev = i - 1; prev >= -1; prev--) {
            let take = -Infinity;
            let notTake = next[prev + 1];
            if (prev === -1 || nums[i] > nums[prev]) {
                take = 1 + next[i + 1];
            }
            cur[prev + 1] = Math.max(take, notTake)
        }
        next = [...cur];
    }
    return next[0];
};

// TC = O(N*N)
// SC = O(N) * 2