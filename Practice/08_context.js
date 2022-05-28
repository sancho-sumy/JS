const person = {
    surname: 'Stark',
    knows: function (what, name) {
        console.log(`You know ${what}, ${name} ${this.surname}`);
    }
}

// const john = { surname: 'Snow' }

// person.knows('everything', 'Bran')
// person.knows.call(john, 'nothing', 'John') // первый оператор это контекст, далее остальные необходимые аргументы вызываемой функции
// person.knows.apply(john, ['nothing', 'John']) // только два оператора: первый - контекст, второй в виде массива!
// person.knows.call(john, ...['nothing', 'John']) // через массив развернутый с помощью опертора spread
// person.knows.bind(john, 'nothing', 'John')() // по умолчанию НЕ ВЫЗЫВАЕТ функцию, нужно вызывать через () либо создать переменну и вызвать функцию отдельно =>>

// const bind = person.knows.bind(john, 'nothing', 'John')
// bind()

//==========

// function Person(name, age) {
//     this.name = name
//     this.age = age

//     console.log(this);
// }

// const alex = new Person('Alex', 36);

// ====== explicit / явная передача контекста
// function logThis() {
//     console.log(this);  
// }

// const obj = {num: 42}

// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// ====== implicit / неявная передача контекста

// const animal = {
//     legs: 4,
//     logThis: function() {
//         console.log(this);
//     }
// }

// animal.logThis()

// For arrow function

function Cat(color) {
    this.color = color
    console.log('This', this);
    ;( () => console.log('Arrow this', this))()
}

new Cat('red')