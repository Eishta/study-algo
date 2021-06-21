// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function (s) {
    let str = s.toLowerCase().replace(/[^A-Za-z\d]/g, '');
    let len = str.length;
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[len - 1 - i]) return false;
    }
    return true;
};