const leapYears = require('./leapYears')

describe('leap years', ()=>{
    test('works with non century years', () => {
        expect(leapYears(1996)).toBe(true);
    })
    test('works with futuristic non century years',()=>{
        expect(leapYears(34992)).toBe(true);
    });
    test('returns false with non leap years', ()=>{
        expect(leapYears(1997)).toBe(false);
    })
    test.skip('works with century years', ()=>{
        expect(leapYears(1900)).toBe(false);
    });
    test.skip('works with century years',()=>{
        expect(leapYears(1600)).toBe(true);
    });
    test.skip('works with century years',()=>{
        expect(leapYears(700)).toBe(false);
    });
})