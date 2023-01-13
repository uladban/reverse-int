module.exports = function reverse (n) {
    // const result;
    console.log(n);
    let absN = Math.abs(n);
    const stringRes = String(absN).split('').reverse().join('');
    console.log(stringRes);
    return +stringRes;
}
console.log(module.exports(162))
