// Check if an element occurs in a every repeating segment of size k of array or not
let ifKeyExistsInSegment = (a, k, n) => {
    let [i, j] = [0, 0];
    while (i + k <= n) {
        j = i;
        while (j < i + k) {
            if (a[j] === key) {
                i = i + k;
                break;
            }
            else if (j == i + k - 1) return false;
            j++;
        }
    }
    j = n - k;

    while (j < n) {
        if (a[j] === key) return true;
    }
    return false;
}