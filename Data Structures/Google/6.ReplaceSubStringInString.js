// Given a Binary String.
// Replace all "01" to "10" until it's no more possible.
// In 1 second you replace all "01" to "10" in next second keep repeating this procedure. Return the total seconds to complete this. eg: 0101->1010->1100 ans:2

// Explanation:

// Example :
// String s = "011"
// For operation 1 -> 101
// For operation 2-> 110

// Example :
// String s = "001011";
// For operation 1: 010101
// For operation 2: 101010
// For operation 3: 110100
// For operation 4: 111000
// Output : 4

function minimumOperations(str) {
    let list = str.split();
    let count = 0;
    while (true) {
        if (find_and_replace(list)) {
            count++;
        }
        else break;
    }
    return count;
}
function find_and_replace(list) {
    let loc = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] == '1' && list[i - 1] == '0') {
            loc.push(i - 1);
        }
    }
    for (let ele of loc) {
        list[ele] = '1';
        list[ele + 1] = '0';
    }
    return list.length != 0;
}

