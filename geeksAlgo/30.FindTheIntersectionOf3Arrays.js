let findIntersection = (a, b, c) => {
    let [i, j, k] = [0, 0, 0];
    let intersection = [];
    while (i < a.length && j < b.length & k < c.length) {
        if (a[i] === b[j] && b[j] === c[k]) {
            intersection.push(a[i]);
            i++; j++; k++;
        }
        else if (a[i] < b[j]) {
            i++;
        }
        else if (b[j] < c[k]) {
            j++;
        }
        else k++;
    }
    return intersection;
}

// findIntersection([1,3,4,6,7],[4,5,7,8,9],[4,5,7,8,9,10,11])
// [4, 7]