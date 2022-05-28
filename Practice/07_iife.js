// Immediate Invoked Function Expression

let result = []
// for (var i = 0; i < 5; i++) {
//     result.push( function () {
//         console.log(i);
//     })
// }

// result[2]()
// result[4]()

for (var i = 0; i < 5; i++) {
    (function() {       
        var j = i
        result.push( function() {
            console.log(j);
        })
    })()
}

console.log(typeof result);
console.log(result);
console.log(result[0]());
result[4]()