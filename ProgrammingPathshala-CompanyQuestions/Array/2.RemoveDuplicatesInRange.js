// Given an array nums of length name, all the elements are in range 1-name,
// and each integer appears once or twice, return an array of integers that appear twice

/** Example
 * Input = [4,3,2,7,8,2,3,1]
 * Output = [2,3]
*/

let returnDuplicatesSpaceEfficient = (a) => {
    let duplicates = [];
    let n = a.length
    for (let i = 0; i < n; i++) {
        let index = Math.abs(a[i]) - 1;
        if (a[index] > 0) {
            a[index] = -a[index];
        }
        else {
            duplicates.push(index + 1)
        }
    }
    return duplicates;
}