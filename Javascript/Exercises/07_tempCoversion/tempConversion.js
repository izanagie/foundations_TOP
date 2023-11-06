let convertToCelsius = (temp)=>{
    let res = ((temp - 32)*5)/ 9;
    let result = Math.round(res * 10) / 10; // multiply the number to 10 
    // 37.7777 becomes 377.7777 round function makes is 378 then divided
    // by 10 makes it 37.8
    return result;
}

let convertToFarenheit = (temp)=>{
    // console.log((temp * 1.8) + 32)
    let res = (temp * 1.8) + 32;
    let result = Math.round(res *10) / 10;
    return result;
    
}

module.exports = {convertToCelsius,convertToFarenheit};