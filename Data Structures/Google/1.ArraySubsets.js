// Given an array, we need to construct 2 arrays left and right something like this:

// Ex: Array: [1,3,2]

// Left           Right
// []             [1,3,2]
// [1]            [3,2]
// [1,3]          [2]
// [1,3,2]        []
// [1,2]          [3]
// [3]            [1,2]
// [3,2]          [1]

// https://leetcode.com/discuss/interview-question/2120553/What's-the-solution-or-Phone-Interview-or-Confidential

function createArray(arr){
    let sets = [[]];
    for(let i =0; i<arr.length;i++){
        let n = sets.length;
        for(let j = 0;j<n;j++){
            let s = sets[j];
            sets.push([...s]);
            sets.at(-1).push(arr[i])
        }
    }
    let left =[], right = [], start = 0, end = sets.length -1;

    while(start < sets.length && end >=0){
        left.push(sets[start]);
        console.log(sets[start])
        right.push(sets[end]);
        console.log(sets[end])
        start++;
        end--;
    }

    return [left, right]
}

// []
// [1, 2, 3]

// [1]
// [2, 3]

// [2]
// [1, 3]

// [1, 2]
// [3]

// [3]
// [1, 2]

// [1, 3]
// [2]

// [2, 3]
// [1]

// [1, 2, 3]
// []