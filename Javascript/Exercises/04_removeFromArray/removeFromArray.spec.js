const removeFromArray = require('./removeFromArray');

describe('removeFromArray',()=>{
    test('removing element from an array',()=>{
        expect(removeFromArray([1,2,3,4],2)).toEqual([1,3,4]);
    });

    test('removing a string character',()=>{
        expect(removeFromArray(['h','e','l','l','o'],'o')).toEqual(['h','e','l','l']);
    });

    test('removing to get empty array',()=>{
        expect(removeFromArray([2],2)).toEqual([]);
    });
    test('removes multiple values',()=>{
        expect(removeFromArray([1,2,3,4],3,2)).toEqual([1,4]);
    });
    test('can remove all values',()=>{
        expect(removeFromArray([1,2,3,4,5],1,2,3,4,5)).toEqual([]);
    });
    test('works with strings', ()=>{
        expect(removeFromArray(["hey",2,3,"ho"],"hey","ho")).toEqual([2,3]);
    });
    test('works only with the samw type',()=>{
        expect(removeFromArray([1,2,3],"1",3)).toEqual([1,2])
    })
});