// Input: strs = ["flower","flow","flight"]
// Output: "fl"


// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = '';
    if (strs.length <= 1) {
        return strs[0]
    }
    for (let i = 0; i <= strs[0].length; i++) {
        prefix = strs[0].slice(0, i);

        let isCommon = strs.every(str => str.slice(0, prefix.length) === prefix);
        if (!isCommon) {
            prefix = prefix.slice(0, -1);
            break;
        }

    }
    return prefix;
};