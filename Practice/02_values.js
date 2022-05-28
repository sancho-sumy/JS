// let a = 42
// let b = a
// b++
// console.log('a', a);
// console.log('b', b);

// let a = [1, 2, 3]
// let b = a
// b.push(4)
// console.log('a', a);
// console.log('b', b);

// a [ 1, 2, 3, 4 ]
// b [ 1, 2, 3, 4 ]
//Так как b = a это не копия массива а ссылка и по сути a и b это одна и та же переменная (не в лучае с простыми типами данных)

// let a = [1, 2, 3]
// let b = a.concat()
// b.push(4)
// console.log('a', a);
// console.log('b', b);

// a [ 1, 2, 3 ]
// b [ 1, 2, 3, 4 ]
// .concat() без аргумента созадет КОПИЮ, поэтому значения разные

let a = [1, 2, 3]
let b = a
b.push(4)

let c = [1, 2, 3, 4]

console.log('a', a);
console.log('b', b);
console.log('c', c);

console.log(a === b);
console.log(a === c);