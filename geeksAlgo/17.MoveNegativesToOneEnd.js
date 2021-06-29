// move to the front end
let moveNegativeToFront = a => {
    let [i, j] = [0, -1];
    while (i < a.length) {
        if (a[i] < 0) {
            j++;
            [a[i], a[j]] = [a[j], a[i]]
        }
        i++;
    }
    return a;
}

moveNegativeToFront([-1, 2, -2, -3, -4, -5])
    (6)[-1, -2, -3, -4, -5, 2]


// move to the last end
let moveNegativeToEnd = a => {
    let n = a.length
    let [i, j] = [n - 1, n];
    while (i >= 0) {
        if (a[i] < 0) {
            j--;
            [a[i], a[j]] = [a[j], a[i]]
        }
        i--;
    }
    return a;
}

moveNegativeToEnd([-1, 2, -2, -3, -4, -5, 0])
    (7)[0, 2, -1, -2, -3, -4, -5]