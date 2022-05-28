// null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'Javascript')
// console.log(typeof undefined)
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))


// Приведение типов

// let language = 'Javascript'
// if (language) {
//     console.log('The best language is:', language)
// }

// console.log(Boolean(''));
// console.log(Boolean('Hello'));
// console.log(Boolean(' '));
// console.log(Boolean('0'));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(function(){}));

// Строки и числа

// console.log(1 + '2'); // string 12 - так как "+" это конкотинация, строка будет только в случае со знаком "+"
// console.log('' + 1 + 0);
// console.log('' - 1 + 10);
// console.log('3' * 8);
// console.log(4 + 10 + 'px'); // 14px !!!
// console.log('px' + 5 + 10); // px510!
// console.log('42' - 40); // 2
// console.log('42px' - 40); // NaN
// console.log(null + 2); // 2
// console.log(undefined + 42); // NaN

// == vs ===

// console.log(2 == '2'); // true
// console.log(2 === '2'); //false
// console.log(undefined == null);
// console.log(undefined === null);
// console.log('0' == false);
// console.log('0' === false);
// console.log('0' == 0);

//====
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false
