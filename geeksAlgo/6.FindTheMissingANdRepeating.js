// Given an unsorted array of size n. Array elements are in the range from 1 to n.
//  One number from set {1, 2, …n} is missing and one number occurs twice in the array.
//  Find these two numbers.

// Input: arr[] = {3, 1, 3}
// Output: Missing = 2, Repeating = 3
// Explanation: In the array, 
// 2 is missing and 3 occurs twice 

// Input: arr[] = {4, 3, 6, 2, 1, 1}
// Output: Missing = 5, Repeating = 1

// in space solution => T(n) = O(n), S(n)= O(1)
let printtwo = a => {
    let miss = null, rep = null;
    for (let i = 0; i < a.length; i++) {
        let index = Math.abs(a[i]);
        if (a[index - 1] > 0) a[index - 1] = -a[index - 1];
        else rep = index;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) miss = i + 1;
    }
    return [miss, rep];
}

// -----------------------------------------------------------------METHOD 2
// # expectedSum = w+x+y+z
// #actualSum = w+y+y+z

// #expectedSumSquare = w2+x2+y2+z2
// #actualSumSquare = w2+y2+y2+z2

// #=> x - y => expectedSum-actualSum
// # => x2 - y2 => expectedSumSquare-actualSumSquare

// # x = (x-y) + (x-y) (x+y)/(x-y)/2  
// with math formula 
// [1,2,2]
let findMissRep = a => {
    let l = a.length;
    if (l <= 1) return;
    let sumN = Math.floor(l * (l + 1) / 2); // 1+2+3= 6
    let sumNS = Math.floor((l * (l + 1) * (2 * l + 1)) / 6); // 1+4+9 = 14
    let xMinY = a.reduce((acc, e) => acc - e, sumN); // 1
    let xsminYs = a.reduce((ac, e) => ac - e * e, sumNS);  // 5
    let miss = (xMinY + xsminYs / xMinY) / 2; // 3
    let rep = miss - xMinY; // 2
    return [miss, rep]; // [3,2]
}