// You are given a string s and an array of strings words of the same length. 
// Return all starting indices of substring(s) in s that is a concatenation of each word in
//  words exactly once, in any order, and without any intervening characters.
// https://www.youtube.com/watch?v=Bbu4Qjzf7A0
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]
var findSubstring = function (s, words) {
    if (!(s && words && words.length && s.length >= words[0].length)) {
        return [];
    }
    let freqMap = {};
    words.forEach((item) => {
        freqMap[item] = freqMap[item] ? freqMap[item] + 1 : 1;
    })
    let totalWords = words.length;
    let wordLength = words[0].length;
    let result = [];

    if (s.length < totalWords * wordLength) return [];
    let loopEnd = s.length - totalWords * wordLength;
    for (let i = 0; i <= loopEnd; i++) {
        let seen = {};
        for (let j = 0; j < totalWords; j++) {
            let index = i + j * wordLength;
            let word = s.substr(index, wordLength);
            if (!freqMap[word]) {
                break;
            }
            seen[word] = seen[word] ? seen[word] + 1 : 1;
            if (seen[word] > freqMap[word]) break;
            if (j + 1 === totalWords) {
                result.push(i);
            }
        }
    }
    return result;
};