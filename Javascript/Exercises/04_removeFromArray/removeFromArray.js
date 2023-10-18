function removeFromArray(arr,...targets){
    let newArr = [];
    arr.forEach(item => {
        if(!targets.includes(item)){
            newArr.push(item);
        };
    });
    return newArr;
}

removeFromArray([1,2,3,4],1,2,3,4)

module.exports = removeFromArray;