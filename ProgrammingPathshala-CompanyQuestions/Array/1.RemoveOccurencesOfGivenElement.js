// Given an integer array SVGAnimatedNumberList, and a value val,
//  remove all occurences of val in nums in place-
//  move the val at end of array and return k=> numer of element after removing val


// Solution :- as we have to move the val at end , we start the traversal from end of the array

let removeElement = (a, ele) => {
    let n = a.length;
    let [i, j] = [n - 1, n];
    while (i >= 0) {
        if (a[i] === ele) {
            j = j - 1;
            [a[i], a[j]] = [a[j], a[i]];
        }
        i--;
    }
    return j - 1;
}

// removeElement([0,1,2,2,3,0,4,2],2)
// 4

// (8) [0, 1, 0, 4, 3, 2, 2, 2]