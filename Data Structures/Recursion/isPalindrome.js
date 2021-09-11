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


function isPalindrome(str) {
  if (str.length === 0) return true;
  else if (str[0] !== str[str.length - 1]) return false;
  else return isPalindrome(str.slice(1, -1));
}
isPalindrome('aba')
true