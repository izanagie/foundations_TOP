const {convertToCelsius, convertToFarenheit} = require('./tempConversion')

describe('convert to celsius', ()=>{
    test('works', ()=>{
        expect(convertToCelsius(32)).toEqual(0);
    });
    test('rounds to 1 decimal', ()=>{
        expect(convertToCelsius(100)).toEqual(37.8);
    });
    test('worls with negative numbers', ()=>{
        expect(convertToCelsius(-100)).toEqual(-73.3);
    });
});

describe('covert to farenheit', ()=>{
    test('works',()=>{
        expect(convertToFarenheit(0)).toEqual(32);
    });
    test('rounds to 1 decimal and works with float values',()=>{
        expect(convertToFarenheit(73.2)).toEqual(163.8);
    });
    test('works with negative values',()=>{
        expect(convertToFarenheit(-10)).toEqual(14)
    });
});
