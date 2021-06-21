// Pair MaxMin(array, array_size)
//    if array_size = 1
//       return element as both max and min
//    else if arry_size = 2
//       one comparison to determine max and min
//       return that pair
//    else    /* array_size  > 2 */
//       recur for max and min of left half
//       recur for max and min of right half
//       one comparison determines true max of the two candidates
//       one comparison determines true min of the two candidates
//       return the pair of max and min

// Method 1 (Tournament Method || merge sort idea)
function MinMax(min = '', max = '') {
    return { min: min, max: max };
}
let getMinMax = (arr) => {
    if (arr.length <= 1) return { min: arr[0], max: arr[0] };
    else if (arr.length === 2) return arr[0] > arr[1] ? { min: arr[1], max: arr[0] } : { min: arr[0], max: arr[1] };

    let mid = Math.floor(arr.length / 2),
        left = getMinMax(arr.slice(0, mid)),
        right = getMinMax(arr.slice(mid + 1));

    return compareMinMax(left, right);

}

let compareMinMax = (left, right) => {
    let minmax = new MinMax();
    minmax.min = left.min < right.min ? left.min : right.min;
    minmax.max = left.max > right.max ? left.max : right.max;

    return minmax;
}

// Method 2 (compare in pairs)
// if even , min = min of ist 2 elements max= max of them, loop starts from 2
// if odd, min = max = arr[0], loop starts at 1
function MinMax(min = '', max = '') {
    return { min: min, max: max };
}

let getMinMaxInPairs = (arr) => {
    let minmax = {}, i = 0;
    // even length array
    if (arr.length % 2 === 0) {        // comparison =1
        minmax = arr[0] > arr[1] ? new MinMax(arr[1], arr[0]) : new MinMax(arr[0], arr[1])
        i = 2;
    }
    else {
        minmax = new MinMax(arr[0], arr[0]);
        i = 1;
    }
    // compare with next pair in the array
    while(i< arr.length -1){  // comaprison = even ? (n-2)/2  : (n-1)/2
        if(arr[i]> arr[i+1]){  // comarison = even ? (n-2)/2  : (n-1)/2
           minmax.min= arr[i+1]< minmax.min ? arr[i+1] : minmax.min;
           minmax.max = arr[i] > minmax.max ? arr[i] : minmax.max;
        }
        else{
           minmax.min= arr[i]< minmax.min ? arr[i] : minmax.min;
           minmax.max = arr[i+1] > minmax.max ? arr[i+1] : minmax.max;
        }
        i+=2;
    }
    return minmax;

}