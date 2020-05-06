const { 
    isLetter, 
    isNumber, 
    isParenthesis, 
    isWhitespace, 
    isQuote 
} = require('./untils/indentify');

const tokenize = (input) => {
    const tokens = [];
    let cursor = 0;

    while(cursor < input.length) {
        const character = tokens[cursor];

        if (isWhitespace(character)) {
            cursor++;
            continue;
        }

        if (isLetter(character)) {
            let symbol = character;

            while(isLetter(tokens[++cursor])) {
                symbol += tokens[cursor];
            }

            tokens.push({
                type: 'Name',
                value: symbol,
            })
            continue;
        }

        if (isQuote(character)) {
            let string = '';

            while(!isQuote(tokens[++cursor])) {
                string += tokens[cursor];
            }

            tokens.push({
                type: 'String',
                value: string,
            })

            cursor++;
            continue;
        }

        if (isNumber(character)) { 
            let numberStr = character;

            while(isNumber(tokens[++cursor])) {
                numberStr += token[cursor];
            }

            tokens.push({
                type: 'Number',
                value: parseInt(numberStr, 10),
            })
        }

        if (isParenthesis(character)) {
            tokens.push({
                type: 'Parenthesis',
                value: character,
            })

            cursor++;
            continue;
        }

        throw new Error(`${character} is not valid`);

    }

    return tokens;
}

module.exports = { tokenize }