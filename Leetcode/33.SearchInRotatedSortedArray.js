// Link- https://www.youtube.com/watch?v=oTfPJKGEHcc

// Example-
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4


// Method 1
// T(n) = O(logn);
// one pass solution
var search = function (nums, target) {

    let [l, r, mid] = [0, nums.length - 1, 0];
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] >= nums[l]) {
            if (target >= nums[l] && target <= nums[mid]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        else {
            if (target >= nums[mid] && target <= nums[r]) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }
    }
    return -1;
};

// Method 2
// T(n) = O(2logn)
// 2pass-> 1st - find the pivot element and then find the target