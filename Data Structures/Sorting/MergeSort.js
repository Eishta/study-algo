let mergeWithSplice = (arr, start, mid, end) => {
    let i = start, j = mid + 1, k = 0;
    let temp = [];
    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            temp[k] = arr[i];
            k++, i++;
        }
        else {
            temp[k] = arr[j];
            k++, j++;
        }
    }
    while (i <= mid) {
        temp[k] = arr[i];
        k++, i++;
    }
    while (j <= end) {
        temp[k] = arr[j];
        k++, j++;
    }
    arr.splice(start, end - start + 1, ...temp)
}
let merge = (a, l, mid, r) => {
    let n1 = mid - l + 1;
    let n2 = r - mid;
    let L = Array(n1);
    let R = Array(n2);
    let i = 0, j = 0;

    while (i < n1) {
        L[i] = a[l + i];
        i++
    }
    while (j < n2) {
        R[j] = a[mid + 1 + j];
        j++
    }
    i = 0, j = 0;
    let k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            a[k++] = L[i++];
        }
        else {
            a[k++] = R[j++];
        }
    }
    while (i < n1) {
        a[k++] = L[i++];
    }
    while (j < n2) {
        a[k++] = R[j++];
    }
}
let mergeSort = (arr, start, end) => {
    if (start < end) {
        let mid = start + parseInt((end - start) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end)
    }
}


// let a=[3,2,6,3,1,2]
// mergeSort(a, 0, a.length-1)
// (6) [1, 2, 2, 3, 3, 6]