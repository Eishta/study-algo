// GCD or HCF is the greatest common number that divides two number
// example:- gcd(10,15)=5, gcd(100,20)= 20, gcd(0,30) = 30 , gcd(20,0) = 20


// Concept behind the computation is as basic hcf computation 
// dividend=14, divisor = 10 
// 10 | 14 | 1
//      10
// --------------
//      4 | 10 | 2
//           8
//        -------
//           2 | 4 | 2
//               4
//              ---
//               0 | 2 | 0 => divisor becomes 0 so return the dividend   

// if divisor becomes 0 return dividend
// else dividend = divisor, divisor = dividend % divisor

// Recursive Approach
let gcdRecursive = (a, b) => {
    if (b == 0) return a;
    else return gcdRecursive(b, a % b)
}

// OR
let gcdRecursive = (a, b) => {
    return b === 0 ? a : gcdRecursive(b, a % b)
}


// Iterative Approach
let gcdIterative = (a, b) => {
    while (b != 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}