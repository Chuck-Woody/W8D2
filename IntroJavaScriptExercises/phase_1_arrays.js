// let uniq = function(){
//     console.log("hello world");
    
// }
Array.prototype.uniq = function() {
    let uniqueArray = [];

    for (let index = 0; index < this.length; index++) {
       
       if (!uniqueArray.includes(this[index])) {
           
           uniqueArray.push(this[index])
       }
    }
    return uniqueArray

    // return this.map(x => x);
}
const array = [1,2,2,3,3,4];

console.log(array.uniq());
console.log("-----")

Array.prototype.twoSum = function() {
    let sumsArr = [];
    this.forEach((value, index) => {
        this.forEach((value2, index2) => {
            if ((value2 + value === 0) && (index2 > index)) {
                sumsArr.push([index, index2])
            }
        })
    })
    return sumsArr;
}

const twoSumArr = [1,3,5,4,7,-1,-5,12]

console.log(twoSumArr.twoSum());
console.log("-----")

Array.prototype.transpose = function() {
    const transArr = Array.from(
        { length: this[0].length },
        () => Array.from({ length: this.length })
      );
    this.forEach((value,i) => {
        this.forEach((value,j) => {

            transArr[i][j] = this[j][i] 
        })     
    })
return transArr

}

const transArr = [[1,2,3]
                ,[4,5,6]
                ,[7,8,9]];

console.log(transArr.transpose());
console.log("--------")

Array.prototype.myEach


