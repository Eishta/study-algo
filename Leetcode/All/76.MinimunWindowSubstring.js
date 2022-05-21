/**
 * count =>keeps a count of the disticnt chars in the 't' and decreases if all the occureneces of that char in 't' have been covered in the current substring
 * map => chars in 't' and their frequency
 * left=> marks the start of the substring
 * right=> marks the end of the substring
 * 1. we start moving right towards s.length until the count becomes 0=> that is all keys in map have values = 0
 * 2. when count becomes 0, we start moving left until we can remove tehe unwanted chars from min
 * 
 * main aim is to have all chars in map value=0
 * and count =0, min having the substring with the min length
 */
var minWindow = function (s, t) {
    let map = {};
    t.split('').forEach(ele => {
        if (map[ele]) map[ele]++;
        else map[ele] = 1;
    })
    let count = Object.keys(map).length;
    let left = 0, right = -1, min = '';
    while (right < s.length) {
        if (count == 0) {
            let cur = s[left];
            if (map[cur] != undefined) map[cur]++;
            if (map[cur] > 0) count++;
            let temp = s.substring(left, right + 1);
            if (min === '') min = temp;
            else min = min.length < temp.length ? min : temp;

            left++;
        }
        else {
            right++;
            let current = s[right];
            if (map[current] !== undefined) {
                map[current]--;
            }
            if (map[current] == 0) count--;
        }
    }
    return min;
};