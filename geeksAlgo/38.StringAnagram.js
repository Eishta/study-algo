// given an array of strings 'dict' and another array of strings 'query', find the no. of anagrams for each string of 'query' in 'dict'

function sortArray(str) {
    return str.split('').sort().join('');
}
function stringAnagram(dictionary, query) {
    // Write your code here
    let map = {};
    for (let ele of dictionary) {
        let str = sortArray(ele);
        if (map[str] !== undefined) {
            map[str] += 1;
        }
        else map[str] = 1;
    }

    let result = query.map((ele) => {
        let i = sortArray(ele);
        if (map[i]) {
            return map[i];
        }
        else return 0;
    })
    return result;

}
let dict = ['listen', 'tow', 'silent', 'lisent', 'two', 'abc', 'no', 'on'];
let query = ['two', 'bca', 'no'];
stringAnagram(dict, query)