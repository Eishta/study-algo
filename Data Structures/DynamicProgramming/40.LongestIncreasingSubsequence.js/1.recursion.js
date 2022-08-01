var lengthOfLIS = function (nums) {
    function solve(i, prev) {
        if (i === nums.length) return 0;
        let take = -Infinity;
        let notTake = solve(i + 1, prev);
        if (prev === -1 || nums[i] > nums[prev]) {
            take = 1 + solve(i + 1, i);
        }
        return Math.max(take, notTake)
    }
    return solve(0, -1)
};