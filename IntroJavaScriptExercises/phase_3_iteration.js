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

String.prototype.subS = function() {

    let arr = [];
    let splitThis = this.split("");
    splitThis.forEach((el,index) => {

        splitThis.forEach((el2,index2) => {

            if (!arr.includes(this.slice(index,index2))) {
                arr.push(this.slice(index,index2))
            }
        })
    })
    return arr;
}
const hello = "hello"
console.log(hello.subS());