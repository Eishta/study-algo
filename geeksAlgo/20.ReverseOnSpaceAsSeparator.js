let reverseSentence = str => {
    let a = str.split(' ');
    let j = a.length - 1, i = 0;
    while (i < j) {
        [a[i], a[j]] = [a[j], a[i]];
        i++; j--;
    }
    return a.join(' ');
}

// reverseSentence('I love python')
// "python love I"