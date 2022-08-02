// A= "eishta" B = "sapna"
// Output: "sa"

// https://www.programiz.com/dsa/longest-common-subsequence

let lcs = (A, B) => {
    let x = A.length, y = B.length;
    let matrix = Array(x + 1).fill().map(() => Array(y + 1).fill());
    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            if (i == 0 || j == 0) { matrix[i][j] = 0; }
            else if (A[i - 1] == B[j - 1]) {  // if equal=> take the diagonal +1
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            }
            else { // if not equal => take the max of the up or left element
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1])
            }
        }
    }

    // return matrix[x][y];  -------------> if you want to return length, return the last element of matrix
    let index = matrix[x][y];
    let s = Array(index + 1).fill('');
    let i = x, j = y;
    while (i > 0 && j > 0) {
        if (A[i - 1] == B[j - 1]) {
            s[index - 1] = A[i - 1];
            i--;
            j--;
            index--;
        }
        else if (matrix[i - 1][j] > matrix[i][j - 1]) {
            i--;
        }
        else j--;
    }
    return s.join('');
}