let sumAll = (num,lim)=>{
    let sum = 0;
    if(num > 0 && lim > 0 && typeof(num) == 'number' && typeof(lim) == 'number'){
        if( num < lim ){
            for(let i=num; i<= lim; i++){
                sum = sum + i
            }
        }else{
            sum = 0;
            for(let i=lim; i<= num; i++){
                sum = sum + i
            }
        }
        return sum;
    }else{
        return "ERROR"
    }
}

module.exports = sumAll;