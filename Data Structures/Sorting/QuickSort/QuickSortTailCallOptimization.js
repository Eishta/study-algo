/**
 * We call the recusive function on the saller part and the bigger part is handled iteratively
 */

function quickSort(arr, low, high) {
    while (low < high) {
        /* pi is partitioning index, arr[p] is now
           at right place */
        var pi = partition(arr, low, high);

        // If left part is smaller, then recur for left
        // part and handle right part iteratively
        if (pi - low < high - pi) {
            quickSort(arr, low, pi - 1);
            low = pi + 1;
        }

        // Else recur for right part
        else {
            quickSort(arr, pi + 1, high);
            high = pi - 1;
        }
    }
}