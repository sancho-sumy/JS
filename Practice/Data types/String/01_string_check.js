// # 1. .includes() - don't work in IE!

let string = 'crossRoad'
let substring = 'road'

let result1 = string.includes(substring)

// # 2. .indexOf()

let result2 = string.indexOf(substring) !== -1



// # 3. RegExp

let regExp = /^cross/i;

let result3 = regExp.test(string)

console.log(result3);
