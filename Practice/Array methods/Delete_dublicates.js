//How to delete dublicates in Array

// 1-st - new Set(array) =======================


const array = ['Alex', 'Donna', 'Mark', 'Donna', 'Meliss', 'Donna', 'Alex', 'Alex']

// const uniqArray = new Set(array) // it will be object

// const uniqArray = [...new Set(array)] // spread will make an array from object

// const uniqArray = Array.from(new Set(array)) // another way to covert to array


// console.log(uniqArray);

// 2-nd - filter and indexOf ===================

// let debug = []

// const uniqArray = array.filter((item, index) => {
//     debug.push({item, index, indexOf: array.indexOf(item)})
//     return index === array.indexOf(item)
// })

// console.table(debug)
// console.log(debug);

// 3-rd - reduce

// const uniqArray = array.reduce((uniq, item) => {
//     return uniq.includes(item) ? uniq : [...uniq, item]
// }, [])

//const array = ['a','b','c','a','b'];
let temp = [];
array.forEach((item, i) => temp[item] = i);

Object.keys(temp);
temp['Sue'] = 5
temp['Sue'] = 8

console.log(temp);