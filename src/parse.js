const {isOpeningParenthesis, isClosingParenthesis} = require('./untils/indentify');
const {pop, peak} = require('./untils/untilities');

const parenthesize = (tokens) => {
    const token = pop(tokens);
    if (isOpeningParenthesis(token.value)) {
        const expression = [];

        while(!isClosingParenthesis(peak(tokens).value)) {
            expression.push(parenthesize(tokens));
        }
        pop(token);
        return expression;
    }

    return token;
}


const parse = (tokens) => {
    if (Array.isArray(tokens)) {
        const [first, ...rest] = tokens;

        return {
            type: 'CallExpression',
            name: first.value,
            arguments: rest.map(parse),
        }
    }
    const token = tokens;

    if (token.type === 'Number') {
        return {
            type: 'NumericLiteral',
            value: token.value,
        }
    }

    if (token.type === 'String') {
        return {
            type: 'StringLiteral',
            value: token.value
        }
    }

    if (token.type === 'Name') {
        return {
            type: 'Indentifier',
            name: token.value,
        }
    }
}

module.exports = {
    parse: (tokens) => parse(parenthesize(tokens))
}