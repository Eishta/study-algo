//ITERATIVE - Time Complexity = > O(n) , Space Complexity = O(1)

let factorial = n => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
};


//RECURSIVE- Time Complexity = > O(n) , Space Complexity = O(n) as stack stores the recursive calls for n times until n==1

let factorialRecursive = n => {
    if (n == 1) return 1;
    else return n * factorialRecursive(n - 1);
}

// T(n) = T(n-1) +3  , when n=1 => T(1) = 1

// T(n) = T(n - 2) + 3 + 3 = T(n - 2) + 6
//      = T(n - 3) + 3 + 6  = T(n - 3) + 9
//      = T(n - 4) + 12
//      = T(n - k) + 3k


// n - k = 0 => k = n
// T(n) = T(0) + 3n
//     = 3n + 1     
//     = O(n)