// Encypted Password: 
// 1. when a lowercase is follwed by an uppercase , swap them and put a star after it - 'hA' => 'Ah*'  i= i+2
// 2. number - put the number at index 0 and replace it with 0-  'hAck3rr4nk' - number 3 => '3hAck0rr4nk' - (forget how the chars before 3 were encrypted)=> i++


let s = '43Ah*ck0rr0nk';
function decryptPassword(s) {
    // Write your code here
    let str = s.split('');
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == '*') {

            [str[i - 2], str[i - 1]] = [str[i - 1], str[i - 2]];
            str.splice(i, 1)
            i -= 2;
        }
        if (str[i] == 0) {
            str[i] = str[0];
            str.splice(0, 1);
        }
    }
    return str.join('');

}

decryptPassword(s);
'hAck3rr4nk'