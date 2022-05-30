let array = [12, 5, 8, 130, 44]

let isBigEnough = (elem) => elem > 15;

let newArray = array.filter(function (elem) {
    return elem > 15
})

console.log(newArray);

console.log(isBigEnough(16));
