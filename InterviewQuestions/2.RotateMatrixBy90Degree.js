// Also known as Rotate image 
// Input      Output
// 1 2 3       7 4 1
// 4 5 6  ->   8 5 2
// 7 8 9       9 6 3

// MEthod 1
let rotateMatrix = (arr) => {
    let [l, r] = [0, arr.length - 1];
    while (l < r) {
        for (let i = l; i < r; i++) {
            let [t, b] = [l, r];
            let temp = arr[t][l + i];
            // tl = bl
            arr[t][l + i] = arr[b - i][l];
            // bl = br
            arr[b - i][l] = arr[b][r - i]
            // br = tr
            arr[b][r - i] = arr[t + i][r]
            // tr = temp
            arr[t + i][r] = temp;

        }
        l++;
        r--;
    }
    return arr;
}

// Method 2-------------------------------------------

let rotate = matrix => {
    let len = matrix.length;
    //find transpose
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    //reverse each row elements
    for (let i = 0; i < len; i++) {
        let [start, end] = [0, len - 1];
        while (start < end) {
            [matrix[i][start], matrix[i][end]] = [matrix[i][end], matrix[i][start]];
            start++;
            end--;
        }
    }
    return matrix;

}



let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

rotateMatrix(arr);