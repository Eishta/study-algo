const replaceWithBS = (temp, ele) => {
    // finds the lower bound
    let l = 0, r = temp.length - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2)
        if (ele < temp[mid]) l = mid + 1;
        else r = mid;
    }
    return l;
}
const longestIncreasingSubsequence = (arr) => {
    let len = 1;
    let temp = [];
    temp.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (temp[temp.length - 1] < arr[i]) {
            temp.push(arr[i]);
            len++;
        }
        else {
            // find the largest value just smaller than arr[i] in temp
            let ind = replaceWithBS(temp, arr[i]);
            if (ind < 0) {
                ind = -1 * ind - 1
            }
            // replace
            temp[ind] = arr[i];
        }
    }
    return len
}


// TC = O(NLogN)
// SC = O(N)