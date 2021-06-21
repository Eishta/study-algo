// An array contains both positive and negative numbers in 
// random order. Rearrange the array elements so that all 
// negative numbers appear before all positive numbers.

let sortPosNeg = (arr) => {
    let cur = -1, next = 0;
    while (next < arr.length) {
        if (arr[next] < 0) {
            cur++;
            [arr[next], arr[cur]] = [arr[cur], arr[next]];
            next++;
        }
        else next++;
    }
    return arr;
}

// Given an array of positive and negative numbers,
//  arrange them such that all negative integers appear
//   before all the positive integers in the array without 
//   using any additional data structure like hash table, 
//   arrays, etc. The order of appearance should be maintained.

let sortPosNegOrder = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) continue;
        let key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}