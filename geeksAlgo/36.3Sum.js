// Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. If there is such a triplet present in array,
// then print the triplet and return true. Else return false.

let sum = (nums, target) => {
    for (let i = 0; i < nums.length-2; i++) {
        for (let j = i + 1; j < nums.length-1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    console.log(`[${nums[i]},${nums[j]},${nums[k]}]`)
                    return true;
                }
            }
        }
    }
    return false;
}

let sumTwoPointer = (nums, target) => {
    for (let i = 0; i < nums.length-2; i++) {
        let [l, r] = [i + 1, nums.length - 1];
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] === target) {
                console.log(`[${nums[i]},${nums[j]},${nums[k]}]`)
                return true;
            }
            else if (nums[i] + nums[l] + nums[r] < target) {
                l++;
            }
            else {
                r--;
            }
        }
    }
    return false;
}

let sumHashMap = (nums, target) => {
    let set = new Set();
    for (let i = 0; i < nums.length-2; i++) {
        let currSum = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (set.has(currSum - nums[j])) {
                console.log(`[${nums[i]},${nums[j]},${currSum - nums[j]}]`)
                return true;
            }
            set.add(nums[j])
        }
    }
    return false
}