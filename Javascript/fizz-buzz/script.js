let number = 100

function fizzBuzz(){
    for(let i=0; i<=number;i++){
        if(i%3 == 0){
            console.log("fizz")
        }else if( i%5 == 0){
            console.log("buzz")
        }
        console.log(i)
    }    
}

fizzBuzz()