// let array = [1, 2, 3, 4, 5]

// let total = array.reduce(function (acc, elem) {
//     console.log('Acc: ', acc, 'Current element: ', elem);
//     return acc + elem
// }, 10)

// console.log(total);

let array2 = ['apple', 'banana', 'peach', 'orange', 'banana', 'cherry', 'apple', 'apple', 'apple']

let fruits = array2.reduce((acc, elem) => {
    if (acc[elem]) {
        acc[elem] += 1
    } else {
    acc[elem] = 1;
    } 
    return acc
}, {}) 

console.log(fruits);