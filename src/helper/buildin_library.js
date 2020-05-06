const all = (fn) => (...list) => list.reduce(fn);

const add = all((a, b) => a + b);
const subtract = all((a, b) => a - b);
const multipy = all((a, b) => a * b);
const divide = all((a, b) => a / b);

const enviroment = {
    add,
    subtract,
    multipy,
    divide,
    pi: Math.PI,
}

module.exports = { enviroment };