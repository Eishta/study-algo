// Method 1 -> sort the strings and compare 
// Complexity is O(nlogn)=>involves sorting
let checkIfAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    s.split('').sort().join('');
    t.split('').sort().join('');

    if (s === t) {
        return true;
    }
    else return false
}

// Method 2-> Use Array or hashMap
// Complexity => Time - O(n), Space-O(n)
let areAnagrams = (s, t) => {
    if (s.length !== t.length) return false;
    let dict = {};
    for (let i = 0; i < s.length; i++) {
        dict[s[i]] = dict[s[i]] ? dict[s[i]] + 1 : 1;
        dict[t[i]] = dict[t[i]] ? dict[t[i]] - 1 : -1;
    }
    for(let value of Object.values(dict)){
        if(value !== 0)return false;
    }
    return true;
}
