// reverse('abcd') => 'dcba'

function reverse(str) {
    if (str.length === 1) return str;
    else return str[str.length - 1] + reverse(str.slice(0, -1));
}



















