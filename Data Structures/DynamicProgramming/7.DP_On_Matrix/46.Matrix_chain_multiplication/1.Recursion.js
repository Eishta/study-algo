const mcm = (nums) => {
    function solve(i, j) {
        if (i === j) return 0;
        let min = Infinity
        for (let k = i; k < j; k++) {
            let steps = nums[i - 1] * nums[k] * nums[j] + solve(i, k) + solve(k + 1, j);
            min = Math.min(min, steps);
        }
        return min;
    }
    return solve(1, nums.length - 1)
}


// TC = Exponential 