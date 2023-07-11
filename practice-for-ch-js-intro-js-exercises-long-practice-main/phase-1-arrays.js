// Your code here

Array.prototype.uniq = function(){
    let newArr = [];
    this.forEach((ele)=> {
        if (!newArr.includes(ele)){newArr.push(ele);}
    })
    return newArr;
}

Array.prototype.twoSum = function(){
    let newArr = [];
    for(let num1 in this){
        for(let num2 in this){
            if ((num2 > num1) && (this[num1] + this[num2] === 0)) {
                newArr.push([num1, num2])
            }

        }
    }
    return newArr;
}

Array.prototype.transpose = function(){
    let transposedArr = [];
    for (let i=0; i < this.length; i++) {
        let row = [];
        for (let j=0; j < this[0].length; j++) {
            row.push(this[j][i]);
        }
        transposedArr.push(row);

    }
    return transposedArr
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())