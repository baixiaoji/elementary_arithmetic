const { tokenize } = require('./tokenize');
const { parse } = require('./parse');
const { evaluate } = require('./evaluate');
const { pipe } = require('./helper/untilities');

const parseAndEvaluate = pipe(
    tokenize,
    parse,
    evaluate,
)

module.exports = {
    parseAndEvaluate,
}