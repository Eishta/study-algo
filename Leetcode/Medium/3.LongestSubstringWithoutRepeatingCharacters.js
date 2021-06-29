var lengthOfLongestSubstring = function (s) {
    let [n, left, right, cur] = [s.length, 0, 0, ''];
    let seen = {};
    let longest = 0;
    while (right < n) {
        cur = s[right];
        if (seen[cur] !== undefined && seen[cur] >= left) {
            left = seen[cur] + 1;
        }
        longest = Math.max(longest, right - left + 1)
        seen[cur] = right;
        right++;
    }
    return longest;
};