function sortRule(a,b) {

    return a > b;
}

Array.prototype.bubbleSort = function(callback) {

    let sorted = false
    while (sorted === false ) {
        sorted = true;
        this.forEach((element,index) => {
            if  (index + 1 !== this.length) {
                if (callback(this[index],this[index + 1])) {
                    [this[index],this[index + 1]] = [this[index + 1],this[index]]
                    sorted = false
                }
            }
        })
    }
    return this
}

const array = [1,9,4,5,7,2,8,3,6]

console.log(array.bubbleSort(sortRule));
console.log("(-----)")