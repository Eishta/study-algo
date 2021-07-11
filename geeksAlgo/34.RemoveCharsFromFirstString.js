// Remove All characters from first string that are present in second string

let getFinalisedString = (str1, str2) => {
    let str3 = '';
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) === -1) {
            str3 += str1[i];
        }
    }
    return str3
}
// getFinalisedString("India is best in all countries", "in")
// "da s best  all coutres"

let getFinalisedString = (str1, str2) => {
    let dict = {};
    let str3 = '';
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for (let i = 0; i < str2.length; i++) {
        dict[str2[i]] = 1;
    }
    for (let i = 0; i < str1.length; i++) {
        if (!dict[str1[i]]) {
            str3 += str1[i];
        }
    }
    return str3;
}
// getFinalisedString("India is best in all countries", "in")
// "da s best  all coutres"