// Your code here

Array.prototype.myEach = function(callback) {
    for (let i=0; i < this.length; i++){
        callback(this[i]);
    }
};

Array.prototype.myMap = function(callback) {
    let newArr = [];

    // for (let i=0; i<this.length; i++){
    //     newArr.push(callback(this[i]));
    // }

    this.myEach(
        function(ele) {
            newArr.push(callback(ele));
        })
    return newArr;
};

Array.prototype.myReduce = function(callback, initialValue) {
    let newArr = this
    if (initialValue === undefined) {
        initialValue = this[0];
        newArr = this.slice(1);
    }
    
    newArr.myEach(ele => initialValue = callback(initialValue, ele));
    return initialValue;
};
    

let adder = function(acc, el) {
    return acc + el;
  }

console.log(
    [1, 2, 3].myReduce(adder, 25)
  )

