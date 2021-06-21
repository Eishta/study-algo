let isPalindrome = (str) => {
    // base case #1
    if(str.length ===0 || str.length ===1){
      return true;
    }
    // base case #2
    if(str.slice(0,1) !== str.slice(-1)){ // firstchar !== lastchar
        return false;
    }
    // recursive case
    return isPalindrome(str.slice(1,-1));  // str with first and last char removed
};