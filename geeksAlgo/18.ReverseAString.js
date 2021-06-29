let reverseAString = str => {
    let s = '';
    for (let i = 0; i < str.length; i++) {
        s = str[i] + s;
    }
    return s;
}


// reverseAString('abcdefgh')
// "hgfedcba"
