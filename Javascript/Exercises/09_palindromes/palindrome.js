let palindromes = (inp)=>{
    let a = []
    a = inp.split('')
    console.log(a)
    let b;
    b = a.toString()
    b = b.replace(/,/g,'')
    console.log(b)
}

palindromes('wish')