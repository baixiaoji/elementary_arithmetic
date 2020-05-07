const pop = (arr) => arr.shift();

const peak = (arr) => arr[0];

const pipe = (...funcList) => (input) => funcList.reduce((result, fn) => fn(result), input);

module.exports = {
    pop,
    peak,
    pipe,
}