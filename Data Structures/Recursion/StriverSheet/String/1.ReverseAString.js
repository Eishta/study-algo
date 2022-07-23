// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.

// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Input: s = "  hello world  "
// Output: "world hello"

var reverseWords = function (s) {
    let left = 0, right = s.length - 1, temp = "", ans = "";
    // trim the spaces at start and end
    while (s.charAt(left) === " " && left <= right) left++;
    while (left <= right && s.charAt(right) === " ") right--;
    // temp stores the current word
    // ans stores the string in reverse order
    while (left <= right) {
        let ch = s.charAt(left);
        if (ch !== " ") {
            temp += ch;
        } else {
            if (ans === "") {
                ans = temp;
            } else {
                ans = temp + " " + ans;
            }
            temp = "";
            // handle multiple spaces
            while (s.charAt(left + 1) === " ") left++
        }
        left++;
    }
    // last word handle 
    if (temp !== "") {
        if (ans === "") {
            ans = temp;
        } else {
            ans = temp + " " + ans;
        }
    }
    return ans;
};

// TC = O(n)
// SC = O(1)