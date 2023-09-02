hello();

function hello() {
    console.log('hello');
}

/* Declaration */
let game;
console.log(game);

/* Initialization */
game = 'Super Mario';
console.log(game);

/* Variable Hoisting */
// console.log(author);

// let author = 'C.S. Lewis';

/* Function Hoisting */
lion("Aslan");

function lion(name) {
    console.log(`The lion's name is ${name}.`)
}

// let lion = function lion(name) {
//     console.log(`The lion's name is ${name}.`)
// }

/* Tasks */
// Task 1
// Declaration is hoisted
// The book is called The Magicians Nephew

// Task 2
// Variable is not hoisted
// Uncaught Reference. Fix by moving variable before console.log()

let book = 'The Silver Chair';

console.log(book);