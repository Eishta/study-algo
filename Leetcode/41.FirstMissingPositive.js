var firstMissingPositive = function (nums) {
    let n = nums.length;
    // mark neg and >= n as n+1 as we are focused only on the positive and numbers in range 1 to n
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1
        }
    }
    // use the numbers as index and mark the elements at that index as neg
    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]) - 1;
        if (nums[num] > 0) {
            nums[num] = -1 * nums[num];
        }
    }
    // find the first positive ele and return its index + 1
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) return i + 1;
    }
    return n + 1;
};