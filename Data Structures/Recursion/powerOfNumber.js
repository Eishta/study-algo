// x^n

let power = (x,n)=>{
    //base case 
    if(n===0)return 1;
    else if(n===1) return x;
    else if( n >0) return x * power(x, n-1);
    else if(n<0) return 1/(power(x,-n))
}