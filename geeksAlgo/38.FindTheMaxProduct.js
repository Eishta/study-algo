//Given an array of integers, find the integers whose product is the maximum

let findMaxProduct = (arr) => {
    let [max, sm, min, smin] = [0, 0, 0, 0];
    for (let ele of arr) {
        if (ele > max) {
            // update both max and sm
            sm = max;
            max = ele;
        }
        else if (ele > sm) {
            // update only sm
            sm = ele;
        }
        else if (ele < 0 && Math.abs(ele) > Math.abs(min)) {
            // update both min and smin
            smin = min;
            min = ele;
        }
        else if (ele < 0 && Math.abs(ele) > Math.abs(smin)) {
            // update only smin
            smin = ele;
        }
    }
    if (max * sm > min * smin) return [max, sm];
    else return [min, smin];
}

findMaxProduct([1, 4, 3, 6, 7, 0])
[7, 6]
findMaxProduct([1, -4, -3, -6, 7, 0])
[-6, -4]
findMaxProduct([1, -4, -3, -6, -7, 0])
[-7, -6]