let merge = (arr, start, mid, end) => {
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
let mergeSort = (arr, start, end) => {
    if (start < end) {
        let mid = start + parseInt((end - start) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end)
    }
}