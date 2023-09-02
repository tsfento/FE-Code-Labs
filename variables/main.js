let game1 = 'Sonic'; // global variable

console.log(game1);

function title() {
    console.log(`${game1}`);
}

title();

if(true) {
    console.log(`${game1}`);
}

/* *** */

function a() {
    let game2 = 'Sonic'; // local variable/functional scope
    console.log(`${game2}`);
}

a();

if(true) {
    let game2 = 'Mario';
    console.log(`${game2}`);
}

function hello() {
    var greeting = 'hello';
}

if(true) {
    let greeting = 'hello';
}

// console.log(greeting);

/* *** */

let x = 10;
console.log(x);

if(true) {
    let x = 2;
    console.log(x);
}

console.log(x);

/* Tasks */

// Task 1
let firstName = 'John';
let lastName = 'Smith';
let age = 25;

function taskFunc1(inFirstName, inLastName, inAge) {
    console.log(`${inFirstName} ${inLastName} is ${inAge} years old.`);
}

taskFunc1(firstName, lastName, age);

// Task 2
function taskFunc2() {
    let inFirstName = 'John';
    let inLastName = 'Smith';
    let inAge = 25;
    let inCountry = 'England';

    console.log(`${inFirstName} ${inLastName} is ${inAge} years old and lives in ${inCountry}.`);
}

taskFunc2();

// Task 3
function taskFunc3(inFirstName = 'John', inLastName = 'Smith', inAge = 25, inCountry = 'England') {
    console.log(`${inFirstName} ${inLastName} is ${inAge} years old and lives in ${inCountry}.`);
}

taskFunc3('James');

// Task 4
// Mario
// Sonic