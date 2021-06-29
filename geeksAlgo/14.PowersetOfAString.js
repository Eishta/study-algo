// input: 'abc'
// output: '','a','b', 'c', 'ab', 'bc','ca', 'abc'
//                           ''                                                         cur='', i=0
//              'a'            |             ''                                          cur='a', i=1
//       'ab'           'a'    |     'b'             ''                                cur='b'
// 'abc'    'ab'|'ac'      'a' |'bc'     'b' |   'c'       ''
// initially pass, i=0, cur=''
let powerSet = (str, i, cur) => {
    if (i === str.length) {
        console.log(cur);
        return cur;
    }
    powerSet(str, i + 1, cur + str[i]); // str[i] included
    powerSet(str, i + 1, cur);// str[i] not included
}


