const { enviroment } = require('./helper/buildin_library');

const apply = (node) => {
    const fn = enviroment[node.name];
    const args = node.arguments.map(evaluate);

    if (typeof fn !== 'function') {
        throw new TypeError(`${node.name} is not a function`)
    }

    return fn.apply(null, args);
}


const getIndentifier = (node) => {
    if (enviroment[node.name]) return enviroment[node.name];

    throw new ReferenceError(`${node.name} is not define`);
}

const evaluate = (node) => {
    if (node.type === 'CallExpression') return apply(node);
    if (node.type === 'Identifier') return getIndentifier(node);
    if (node.value) return node.value;
}

module.exports = {evaluate};