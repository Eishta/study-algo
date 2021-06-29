let reverseAString = str => {
    if (str.length <= 1) return str;
    else return reverseAString(str.substring(1)) + str[0]
}

// reverseAString('abcdefgh')
// "hgfedcba"
