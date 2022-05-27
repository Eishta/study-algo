
/**
 * The key process in quickSort is partition().
 *  Target of partitions is, given an array and an element x of array as pivot,
 *  put x at its correct position in sorted array and put all smaller elements (smaller than x) before x,
 *  and put all greater elements (greater than x) after x. All this should be done in linear time.
 *
 * 
 * 
 *  ->  SPACE COMPLEXITY
 *         O(1) as no extra DS is used 
 *  -> It is tail recursive-> no stack frame info is stored as there is nothing to do after the recursive call so it is better 
 *  -> it takes O(1) space 
 *  -> in worst case it uses O(n) sapce. - not in-place
 *  -> it is not a stable algo. -> the order of elements is affected
 *  -> Time complexity -> O(nLogn) 
 *  -> Worst case space can be improved by tail call elemination
 */

/** TIME COMPLEXITY Arrangements
 *        BEST CASE - n/2 pivot n/2
 *                OR  n/2 pivot (n-1)/2
 *                OR  (n-1)/2 pivot n/2
 *      COMPLEXITY - O(nlogn)  - traverse n elements at logn levels
 *        AVERAGE   - n-2 pivot 1
 *            OR    - 1 pivot n-2
 *      COMPLEXITY - O(nlogn)  - forcefully we achieve this
 *        WORST     - n-1 pivot 0
 *             OR   - 0 pivot n-1      
 *      COMPLEXITY - O(n^2)  - traverse n elements at n levels
 */


let quicksort = (A, start, end) => {
    if (start >= end) return
    let p_index = partition(A, start, end);
    quicksort(A, start, p_index - 1);
    quicksort(A, p_index + 1, end)
    return A;
}
let partition = (A, start, end) => {
    let pivot = A[end], p_index = start;
    for (let i = start; i < end; i++) {
        if (A[i] < pivot) {
            [A[i], A[p_index]] = [A[p_index], A[i]]
            p_index++;
        }
    }
    [A[end], A[p_index]] = [A[p_index], A[end]]
    return p_index;
}

let kthLargest = (a, l, h, k) => {
    if (k > 0 && k <= a.length) {
        let pos = partition(a, l, h);
        let indexNeeded = a.length - k;
        if (pos == indexNeeded) {
            return a[pos];
        }
        else if (pos < indexNeeded) {
            return kthLargest(a, pos + 1, h, k);
        }
        else {
            return kthLargest(a, l, pos - 1, k);
        }

    }
    else return 'NotFound'
}