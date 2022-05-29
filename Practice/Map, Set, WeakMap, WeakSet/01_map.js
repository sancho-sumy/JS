// create object
const obj = {
    name: 'Alex',
    age: 36,
    job: 'Fullstack'
}

// create the same object in different way

const entries = [
    ['name', 'Alex'],
    ['age', 36],
    ['job', 'Fullstack']
]

// methods to tranform object to array or array to object

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map(entries)



// console.log(map.get('name'));

map
    .set('newField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'Nan??')

// console.log(map);

// map.delete(map.get(NaN)) // to delete any key
// console.log(map.has("name")); // to ches does map has any key (true/false)
// console.log(map.size); // to get map size

// map.clear() // clear all entries from map
// console.log(map.size); 

// ==========

// for (let entry of map.entries()) {
//     console.log(entry);
// }

// // to get separate variables NOT an ARRAY


// for (let [key, value] of map) {  
//     console.log(key, value);
// }

// can be map.entries() but not needed becouse .entries() called by default


// // to get ONLY values
// for(let val of map.values()) {
//     console.log(val);   
// }

// // to get ONLY keys
// for(let key of map.keys()) {
//     console.log(key);   
// }

//another way to get key/values
// map.forEach((val, key, m) => {
//     console.log(val, key);
// });


// ============

// make array from map
// const array = [...map]
// console.log(array);

// alt. make arrey from map

// const array = Array.from(map)
// const mapObj= Object.fromEntries(map.entries())
// console.log(array);
// console.log(mapObj);

// How to use MAP

const users = [
    {name: 'Alex'},
    {name: 'Elena'},
    {name: 'Max'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))


function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[0]));
console.log(lastVisit(users[1]));
console.log(lastVisit(users[2]));

console.log(visits);