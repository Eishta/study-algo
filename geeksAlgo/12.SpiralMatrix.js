let spiral = (a, m, n) => {
    let k = 0, l = 0,i;
    while (k < m && l < n) {
        for (i = l; i < n; i++) {
            console.log(a[k][i]);
        }
        k++;
        for (i = k; i < m; i++) {
            console.log(a[i][n - 1]);
        }
        n--;
        if (k < m) {
            for (i = n - 1; i >= l; i--) {
                console.log(a[m - 1][i]);
            }
            m--;
        }
        if (l < n) {
            for (i = m - 1; i >= k; i--) {
                console.log(a[i][l]);
            }
            l++;
        }

    }
}

let spiralMatrix = (a, m, n) => {
    let [k, l, i] = [0, 0, 0];
    let arr=[];
    while (k < m && l < n) {
        for (i = l; i < n; i++) {
            arr.push(a[k][i])
        }
        k++;
        for (i = k; i < m; i++) {
            arr.push(a[i][n - 1])
        }
        n--;
        if (k < m) {
            for (i = n - 1; i >= l; i--) {
                arr.push(a[m - 1][i])
            }
            m--;
        }
        if (l < n) {
            for (i = m - 1; i >= k; i--) {
                arr.push(a[i][l])
            }
            l++
        }
    }
return arr;
}
let arr = [[1,2,3],[4,5,6],[7,8,9]];
let r = arr.length;
let c = arr[0].length;

spiral(arr,r, c);
// OUTPUT
// 1
// 2
// 3
// 6
// 9
// 8
// 7
// 4
// 5