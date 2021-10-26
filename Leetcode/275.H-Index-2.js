// https://www.youtube.com/watch?v=CjKJDloMnwE

var hIndex = function (citations) {
    let [n, l, h] = [citations.length, 0, citations.length - 1];
    while (l <= h) {
        let mid = l + Math.floor((h - l) / 2);
        if (citations[mid] == (n - mid)) return citations[mid];
        else if (citations[mid] > (n - mid)) h = mid - 1;
        else l = mid + 1;
    }
    return n - l;
};