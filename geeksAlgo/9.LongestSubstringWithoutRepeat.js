let longestSubstring = (s) => {
    if (s.length <= 1) return s;
    let longest = 0;
    let left = 0;
    let seen = new Map();
    for (let right = 0; right < s.length; right++) {
        if (seen[s[right]] !== undefined && seen[s[right]] >= left) {
            left = right;
        }
        seen[s[right]] = right;
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
}