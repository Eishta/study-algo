// Recursive Method
// example digits = '23'
var letterCombinations = function (digits) {
    if (!digits || digits.length === 0) return [];
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let res = [];
    const backtrack = (i, s) => { 
        if (i == digits.length) {// ex- when i = 2
            res.push(s);
            return;
        }

        let cur = map[digits[i]];   // 'abc' for 2, 'def' for 3
        for (let c of cur) { // a,b,c,         d,e,f
            backtrack(i + 1, s + c);
        }
    }
    backtrack(0, '');
    return res;
};

// Iterative Method

let letterCmomboIterative = (digits) => {
    if (!digits || !digits.length) return [];
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let res = [''];
    for (let digit of digits) {
        let temp = res;
        res = [];
        for (let s of temp) {
            for (let c of map[digit]) {
                res.push(s + c);
            }
        }
    }
    return res;
}
