var nextPermutation = function (nums) {
    // find the element from right such that a[i]<a[i+1]
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    nums = reverse(i + 1, nums.length - 1, nums);
    return nums;
};

let reverse = (start, end, arr) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++; end--;
    }
    return arr;
}

