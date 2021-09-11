
let capitaliseWord = (arr) => {
    let result = [];
    if (arr.length === 0) return [];
    result.push(arr[0].toUpperCase());
    return [...result, ...capitaliseWord(arr.slice(1))];

}

capitaliseWord(['apple', 'ball', 'cat','dog'])
(4) ["APPLE", "BALL", "CAT", "DOG"]