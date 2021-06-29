let longestSubstring = (s) => {
    if (s.length <= 1) return s.length;
    let longest = 0;
    let left = 0, curChar = '';
    let seen = new Map();
    for (let right = 0; right < s.length; right++) {
        curChar = s[right]
        if (seen[curChar] !== undefined && seen[curChar] >= left) {
            left = seen[curChar] + 1;
        }
        seen[curChar] = right;
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
}

// longestSubstring('ABACCDEY')
// 4