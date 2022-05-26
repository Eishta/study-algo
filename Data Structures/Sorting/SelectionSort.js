/**
 * Maintains 2 subarrays - sorted and unsorted
 * Selects the min element from the unsorted elemnet and puts it to the sorted array in every iteration
 */

let selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[i]) {
                [a[j], a[i]] = [a[i], a[j]]
            }
        }
    }

    return arr;
};