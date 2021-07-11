let firstNonRepeatingChar = str => {
    let dict = {};
    let [curChar, firstChar] = ['', ''];
    for (let i = str.length; i >= 0; i++) {
        curChar = str[i];
        dict[curChar] = dict[curChar] === undefined ? 1 : dict[curChar] + 1;
        if (dict[curChar] === undefined) {
            firstChar = curChar;
            dict[curChar] = 1;
        }

    }
    return firstChar;
}

firstNonRepeatingChar('stronsg')
"t"