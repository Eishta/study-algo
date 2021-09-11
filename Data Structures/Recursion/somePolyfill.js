

function someRecursive(arr, cb) {
    if (arr.length == 0) return false;
    else if (cb(arr[arr.length - 1])) return true;
    else return someRecursive(arr.slice(0, -1), cb)
}

function isOdd(x) {
    if ((x & 1) === 0) return false;
    else return true;
}

someRecursive([1, 2, 3, 4, 5], isOdd)    // true  atleast one should be true
someRecursive([2, 4], isOdd) // false