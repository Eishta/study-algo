/**
 * In 3 Way QuickSort, an array arr[l..r] is divided in 3 parts:
 * a) arr[l..i] elements less than pivot.
 * b) arr[i+1..j-1] elements equal to pivot.
 * c) arr[j..r] elements greater than pivot.
 * 
 * [ 4  9  4  4  1  9  4  4  9  4  4  1  4  ]
 * [ 1  1   ||     4  4  4  4  4  4  4  4   ||    9  9  9  ]
 */


// Link - https://www.geeksforgeeks.org/3-way-quicksort-dutch-national-flag/
// Dutch National Flag Algorithm - https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

const partition3Way = (arr, l, h, i, j) => {

    // handle 2 elements
    if (h - l <= 1) {   // 1-0 = 1, 5-4 = 1 , 4-4 = 0 => examples of the values of l and h
        if (arr[h] < arr[l]) {
            [arr[h], arr[l]] = [arr[l], arr[h]]
            i = l;
            j = h;
            return;
        }
    }
    let mid = l;
    let pivot = arr[h];

    while (mid <= h) {
        let m = arr[mid];
        if (m < pivot) {
            [arr[l], arr[m]] = [arr[m], arr[l]];
            m++, l++;
        }
        else if (m == pivot) m++;
        else {
            [arr[mid], arr[h]] = [arr[h], arr[mid]];
            h--;
        }
    }
    i = l - 1;
    j = h + 1;
}

const quickSort3Way = (arr, l, h) => {
    if (l >= r) return;
    let i, j;
    partition3Way(arr, l, h, i, j);
    quickSort3Way(arr, l, i);
    quickSort3Way(arr, j, h);
}
