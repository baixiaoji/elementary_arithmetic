import {parseAndEvaluate} from '../src/parse-and-evaluate';

describe(parseAndEvaluate, () => {
    it('should return accurate result when input is (add 1 2)', () => {
        expect(parseAndEvaluate('(add 1 2)')).toBe(3);
    }); 

    it('should return accurate result when input is (subtract 1 2)', () => {
        expect(parseAndEvaluate('(subtract 1 2)')).toBe(-1);
    }); 


    it('should return accurate result when input is (multipy 2 2)', () => {
        expect(parseAndEvaluate('(multipy 2 2)')).toBe(4);
    }); 

    it('should return accurate result when input is (divide 3 2)', () => {
        expect(parseAndEvaluate('(divide 3 2)')).toBe(1.5);
    }); 
})