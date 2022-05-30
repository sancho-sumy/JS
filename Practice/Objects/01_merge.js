const obj1 = {
    food: 'pizza',
    beverage: 'orange fresh',
    coffe: 'late'
}

const obj2 = {
    salad: 'greek',
    main: 'grilled chicken',
    coffe: 'americano'
}


// spread
// let merged = {...obj1, ...obj2}
// console.table(merged)

//Object.assign

let merged2 = Object.assign({}, obj1, obj2)
console.table(merged2)
console.table(obj1)
console.table(obj2)

//for

// let merged3 = {}

// for (const attr in obj1) {
//     merged3[attr] = obj1[attr]
// }

// for (const attr in obj2) {
//     merged3[attr] = obj2[attr]
// }

// console.table(merged3)
// console.table(obj1)
// console.table(obj2)