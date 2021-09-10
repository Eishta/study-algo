function powerOfNumber(n, p){
    if(p===0)return 1;
    else if(p===1) return n;
    else return n * powerOfNumber(n, p-1)
}