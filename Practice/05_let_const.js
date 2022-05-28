// Let

// let a = 'Variable a'
// let b = 'Variable b'

// {
//     a = 'New Variable A'
//     let b = 'Local Variable B'
//     console.log('Scope A', a);
//     console.log('Scope B', b);
// }
// console.log('A', a);
// console.log('B', b);

// Const

//const PORT = 8080

// const array = ['Javascript', 'is', ' Awsome']
// array.push('!')
// array[0] = 'JS'
// console.log(array);

const obj = {}
obj.name = 'Alex'
obj.age = 36
console.log(obj);

obj.age = 18
console.log(obj);

delete obj.name
console.log(obj);
