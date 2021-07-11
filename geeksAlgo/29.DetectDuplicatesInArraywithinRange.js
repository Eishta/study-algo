// numbers in range 1-n => you can use numbers as index
let detectDuplicatesWithinRangeInPlace = arr => {
    let curEle = 0, dup = [];
    for (let i = 0; i < arr.length; i++) {
        curEle = Math.abs(arr[i]);
        if (arr[curEle] > 0) {
            arr[curEle] = -arr[curEle];
        }
        else {
            dup.push(curEle);
        }
    }
    return dup;
}