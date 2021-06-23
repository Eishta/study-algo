/**
 * Complexity
 * BEST= O(n) => when the array is already sorted
 * Average = O(n^2)
 * Worst = O(n^2) => when the array is in decreasing order => inversely sorted
 */

let insert = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;

        }
        arr[j + 1] = key;
    }
    return arr;
}