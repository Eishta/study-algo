let ifExistsInSegment = (a, n, key, seg) => {
    for (let i = 0; i < n; i = i + seg) {
        let j = 0;
        for (j = 0; j < seg; j++) {
            if (a[i + j] === key) {
                break;
            }
        }
        if (j == seg) return false;
    }
    if (i == n) return true;
    for (j = n - seg; j < n; j++) {
        if (a[j] == key)
            return true;
    }
    if (j == n) return false;
    return true;
}

let arr = [3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3, 4];
let x = 3, k = 3;
let n = arr.length;
if (ifExistsInSegment(arr, n, x, k))
    console.log('YES')
else
    console.log("No");

// YES