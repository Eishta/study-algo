// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let index = A.length - 1;
    let carry = 1;
    while (carry) {
        if (index < 0) {
            A.unshift(1)
        }
        else {
            A[index] += 1;
        }
        if (A[index] > 9) {
            A[index] = 0;
            index--;
        }
        else {
            carry = 0;
        }
    }
    return A;
};

// using ternary operator
let d = (A) => {
    let index = A.length - 1, carry = 1;
    while (carry) {
        if (index >= 0) {
            A[index] = A[index] + 1 > 9 ? (carry = 1, A[index] = 0) : (carry = 0, A[index] = A[index] + 1);
            index = index - 1;
        }
        else {
            A.unshift(1);
            carry = 0;
        }
    }
    while(A[0]===0)A.shift()
    return A;
    }