let ifPalindrome = str => {
    //reverse the string 
    if (reverseAString(str) === str) return true;
    else return false;

}

let reverseAString = str => {
    let s = '';
    for (let i = 0; i < str.length; i++) {
        s = str[i] + s;
    }
    return s;
}

ifPalindrome('madam')
true