// LogN means that the number of computations become half at each level 

// like in pow(x,y), at level 1 y=4 then at level 2 y becomes 2 
// then at 3 it becomes 1 and then finally when it becomes 0 we return the result 

// Recursive
/**
 * power(2,5)=> x=2, y=5 => y%2 = 5%2 !==0 (odd) => return x*temp *temp => return 2*4*4=32
 * temp =power(2,2) => y%2 = 2%2 ==0 => return temp * temp = 2 * 2 = 4
 * temp = power(2,1) => y%2 = 1%2 != 0 => return x*temp *temp = 2*1*1 = 2(return to above level)
 * temp = power(2,0) => return 1 (backtrack)
 */
let power = (x, y) => {
    if (y === 0) return 1;
    else {
        let temp = 1;
        temp = power(x, Math.floor(y / 2));
        return y % 2 === 0 ? temp * temp : x * temp * temp;
    }
}

// Iterative
/**
 * powerIterative(2,5)=> x=2, y=5=> 
 * y%2= 5 is odd => result = result *x = 1*2 = 2, y = y-1= 4
 * y(4) is even => x= x*x = 2*2=4, y = y/2= 2
 * y(2) is even => x= x*x = 4*4 =16 , y=2/2=1
 * y(1) is odd = > result = result * x= 2*16=32 y=1-1=0
 * loop ends , return 32
 */
let powerIterative = (x, y) => {
    if (y === 0) return 1;
    let result = 1;
    while (y > 0) {
        if (y % 2 === 0) {
            x = x * x;
            y = y / 2;
        }
        else {
            result = result * x;
            y = y - 1;
        }
    }
    return result;
}