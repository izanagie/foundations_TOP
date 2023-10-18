const reverseString = require('./reverseString')

describe('reverseString', ()=>{
    test('reveses single word', ()=>{
        expect(reverseString('hello')).toEqual('olleh');
    });

    test('reversing multiple words',()=>{
        expect(reverseString('hello there')).toEqual('ereht olleh')
    });

    test('reversing with multiple words with punctation',()=>{
        expect(reverseString('123! abc!')).toEqual('!cba !321')
    });
    
    test('reversing empty strings',()=>{
        expect(reverseString('')).toEqual('')
    })

})

