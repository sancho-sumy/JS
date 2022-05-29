let nums = [1, 4 , 9, 12, 50]

let result = nums.map(function (elem, index) {     
    console.log(index, elem * 2); 
})


let resultAlt = nums.map( (elem, index) => elem * 2 + index)

console.log(result);
console.log(resultAlt);