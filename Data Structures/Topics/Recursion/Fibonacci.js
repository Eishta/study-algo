// n = 5 ,
// return =   0 1 1 2 3

// ITERATIVE - Complexity -> O(n)
let fibI = n => {
    if (typeof n === 'number' && n >= 0 && Math.floor(n) === n) {
        let a = 0, b = 1, c = 0;
        if (n <= 1) return n;
        for (let i = 2; i <= n; i++) {
            c = a + b;
            [a, b] = [b, c];
        }
        return c;
    }
    return 'Invalid Argument'
}
// RECURSIVE - Time Complexity - O(2^n)
let fibR = n => {
    if (typeof n === 'number' && n >= 0 && Math.floor(n) === n) {
        if (n <= 1) return n;
        else return fib(n - 1) + fib(n - 2);
    }
    return 'Invalid Argument'
}
/**
 * T(n) = T(n-1) + T(n-2) + 4
 *  if n-1 ~= n-2
 * T(n) = 2T(n-1 )+4
 * for n=0 and n=1 => T(0)=0, T(1)=1
 *
 */


// Problem => each index is processed and is not stored so when it is required again it will be processed again 
// -------

