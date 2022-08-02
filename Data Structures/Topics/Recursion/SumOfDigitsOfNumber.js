let sumOfDigits = (n) => {
    if(typeof n =='number' && n>=0 && Math.floor(n)=== n)
    if (n ==0) return 0;
    return n % 10 + sumOfDigits(Math.floor(n / 10));
}