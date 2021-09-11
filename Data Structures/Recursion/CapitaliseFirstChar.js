// ['apple', 'ball', 'cat','dog'] => ['Apple','Ball', 'Cat', 'Dog']
function capitalize(arr) {
    let result = [];
    if (arr.length === 0) return result;
    result.push(arr[0][0].toUpperCase() + arr[0].slice(1))
    return [...result,...capitalize(arr.slice(1))];
}