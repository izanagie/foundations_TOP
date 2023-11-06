const sumAll = require("./sumAll");

describe('tests for sumAll', () => {
    test('sum all the numbers within the range', () => {
        expect(sumAll(1,4)).toEqual(10);
    });
    test('works with large numbers',()=>{
        expect(sumAll(1,4000)).toEqual(8002000);
    })
    test('works with larger number first',()=>{
        expect(sumAll(123,1)).toEqual(7626)
    })
    test('shows error when input negative numbers',()=>{
        expect(sumAll(-10,4)).toEqual('ERROR')
    })
    test('return error with string',()=>{
        expect(sumAll(10,"90")).toEqual('ERROR')
    })
    test('returns ERROR with non-number parameters', ()=>{
        expect(sumAll(10, [90,1])).toEqual('ERROR')
    });
});