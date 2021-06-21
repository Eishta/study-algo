// 1. Loop through array and check if ele is the req ele.
// if yes the start incrementig the count till you find the ele.

// 2. Find any occurence of the ele using binary search. when it is found :-
// loop back to get all the elements before and loop after to get all elements after the found position

// 3. Find the first and last occurence of the element using vinary search

// 3.

let first = (a, l, h, x, n) => {
    if (h >= l) {
        let mid = Math.floor((l + h) / 2);
        if ((mid === 0 || x > a[mid - 1]) && a[mid] === x) return mid;
        else if (a[mid] > x) return first(a, l, mid - 1, x, n)
        else return first(a, mid + 1, h, x, n)
    }
    return -1;
}
let last = (a, l, h, x, n) => {
    if (h >= l) {
        let mid = Math.floor((l + h) / 2);
        if ((mid === n - 1 || x < a[mid - 1]) && a[mid] === x) return mid;
        else if (a[mid] > x) return last(a, l, mid - 1, x, n)
        else return last(a, mid + 1, h, x, n)
    }
    return -1;
}
let findCount = (a, ele) => {
    let n = a.length;
    let f = first(a, 0, n - 1, ele, n);
    if (f === -1) return f;
    let l = last(a, f, n - 1, ele, n);
    return l - f + 1;
}