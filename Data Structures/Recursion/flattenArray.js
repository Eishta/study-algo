// [1,2,[[3,4]],[5]]=> [1,2,3,4,5]

function flatten(arr) {
    let output = [];
    for (let ele of arr) {
        if (Array.isArray(ele)) {
            output = [...output, ...flatten(ele)];
        }
        else output.push(ele)
    }
    return output;
}