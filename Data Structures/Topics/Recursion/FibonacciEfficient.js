// Problem => each index is processed and is not stored so when it is required again it will be processed again 
// -------

// We can avoid the repeated work done is method 1 by storing the Fibonacci numbers calculated so far. 
// by storing the values in Array
// SC= O(n), TC=O(n)
let fibDP = n => {
    let f = [0, 1];
    for (let i = 2; i <= n; i++) {
        f.push(f[i - 1] + f[i - 2])
    }
    return f[n];
}

// SPACE OPTIMISED
// as we need only last two elements to compute the next so we use the iterative method with variable
//  a, b that stores the last two values 
// time complexity = O(n) , space= O(1)

