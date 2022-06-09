// Given an arry arr of n positive integers, the following operations can be performed 0 or more times:

// Choose an index i where 0<=i<n
// choose 2 integers, x and y, such that x+y=arr[i]
// replace arr[i] with two elements, the two values x and y
// Determine the minimum number of operations required to sort the array.
// Example:
// n=3
// arr=[3,4,3]
// [3,4,3] -> [1,2,4,3] -> [1,2,2,2,3]
// return 2 (the array cannot be sorted in fewer than 2 operations)

// [3,9,2]
// divide 9-> 1,2,2,2,2 ->(4steps) and update value of array at index as 1
// and array looks -> [3,1,2,2,2,2,2]
// and divide 3-> 1,1,1 ->(2 steps)
// and array looks like [1,1,1,1,2,2,2,2,2];


function stepsWithMinus(arr) {
    let steps = 0;
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            let x = arr[i];
            while (x > a[i + 1]) {
                x -= a[i + 1];
                steps++;
            }
            a[i] = x;
        }
        return steps;
    }
}

function stepsWithDivide(arr) {
    let steps = 0;
    let max = Number.MAX_SAFE_INTEGER;
    for (let i = arr.length - 1; i >= 0; i--) {
        let n = arr[i];
        while (n > max) {
            if (n % 2 == 1) n++; // if n is odd, make it even
            n = n / 2;
            steps++;
        }
        max = n;
    }
    return steps;
}


//Time Complexity = O(N)