// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

var isValid = function (s) {
    let arr = [];
    let map = new Map();
    map.set(')', '(');
    map.set('}', '{');
    map.set(']', '[');

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let top = arr.length ? arr.pop() : '#';
            if (top !== map.get(s[i])) return false;
        }
        else arr.push(s[i])
    }
    return !arr.length ? true : false;

};