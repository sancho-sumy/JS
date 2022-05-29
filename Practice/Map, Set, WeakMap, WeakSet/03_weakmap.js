// let obj = {name: 'weakmap'}

// // obj = null
// // console.log(obj);


// const map = new WeakMap([
//     [obj, 'obj data']
// ])
// //get, set, delete, has
// obj = null
// console.log(map.get(obj)); 

// =========

const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena));
console.log(cache.has(alex));