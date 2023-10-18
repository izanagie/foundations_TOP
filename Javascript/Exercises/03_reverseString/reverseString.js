let revString = (str) =>{
    let  arr = str.split('');
    let arrReverse = [];
    for(i=0; i< arr.length;i++){
        arrReverse.unshift(arr[i]);
    }; 
    let revString = arrReverse.join('');
    return revString;
};

module.exports = revString;