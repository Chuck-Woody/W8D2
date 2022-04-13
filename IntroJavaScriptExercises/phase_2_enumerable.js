function banana(num) {
    return (num + 1);
}
Array.prototype.myEach = function(callback) {

    for (let index = 0; index < this.length; index++) {
       callback(this[index]); 
    }
}
const array = [1,2,3];
array.myEach(banana);

Array.prototype.myMap = function(callback) {
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push( callback(this[index]));
    }
    return newArray
}

console.log(array.myMap(banana));
console.log("-----")


function injectArr(num1, num2) {
    return num1 + num2;
}

Array.prototype.myReduce = function(callback,initialVal) {
let acc = 0;

    if (initialVal === undefined ) {
        acc = this[0];
        for (let index = 1; index < this.length; index++) {
            acc = callback(acc, this[index]);
        }
        return acc
    } 
    else { acc = initialVal
        for (let index = 0; index < this.length; index++) {
            acc = callback(acc, this[index]);
        }
        return acc
        } 
}
const newArray = [1,2,3]
console.log(newArray.myReduce(injectArr));
console.log(newArray.myReduce(injectArr,25));

