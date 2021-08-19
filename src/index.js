module.exports = function reverse(n) {
    let str = n.toString();
    let deletesymbol = str.split('-').join('');
    let reverse = deletesymbol.split('').reverse().join('');
    return reverse;
}