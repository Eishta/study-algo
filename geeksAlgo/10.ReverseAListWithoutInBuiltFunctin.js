let reverse = list => {
    let i = 0, j = list.length - 1;
    while (i < j) {
        [list[i], list[j]] = [list[j], list[i]]
        i++, j--;
    }
    return list;

}