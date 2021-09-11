function recursiveRange(n){
    // check n is integer and +ve
    if(n===0)return 0;
    else return n + recursiveRange(n-1);
}

recursiveRange(5)// 15
recursiveRange(6) // 21

recursiveRange(0)//0
