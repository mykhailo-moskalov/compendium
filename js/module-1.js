// // BASICS
//
// 'use strict';
// console.log();
//
//
//
// // VARIABLE DECLARATIONS
//
// const abc = 3;
// console.log(abc); //3
// let def = 4;
// console.log(def); // 4
// def = 5;
// console.log(def); // 5
//
//
//
// // DATA TYPES
//
// const topSpeed = 160; // number
// const distance = 617.54; // number
// const login = 'mango935'; // string
// const isOnline = true; // boolean
// const isAdmin = false; // boolean
// const object = null; // null
// const value = undefined; // undefined
// let valueNext; // undefined
//
// console.log(typeof topSpeed); // number
// console.log(typeof distance); // number
// console.log(typeof login); // string
// console.log(typeof isOnline); // boolean
// console.log(typeof isAdmin); // boolean
// console.log(typeof object); // object
// console.log(typeof value); // undefined
// console.log(typeof valueNext); // undefined
//
//
//
// ARITHMETIC OPERATIONS
//
// const x = 3;
// const y = 2;
// const a = x + y;
// const b = x - y;
// const c = x * y;
// const d = x / y;
// const e = x % y;
// const f = x ** y;
//
// console.log(a); // 5
// console.log(b); // 1
// console.log(c); // 6
// console.log(d); // 1.5
// console.log(e); // 1
// console.log(f); // 9
//
//
//
// COMBINED OPERATORS
// let x = 1;
// let y = 2;
// x += y; // = x + y
// console.log(x); // 3
// x -= y; // = x - y
// console.log(x); // -1
// x *= y; // = x * y
// console.log(x); // 2
// x /= y; // = x / y
// console.log(x); // 0.5
// x %= y; // = x % y
// console.log(x); // 1
//
//
//
// STRING CONCATENATION
//
// let message = 'Mango ' + 'is' + ' happy';
// console.log(message); // "Mango is happy"
//
// const age = 24;
// message = 'Poly is ' + age + ' years old!';
// console.log(message); // "Poly is 24 years old!"
//
//
//
// TYPE CONVERSION: string
// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"
//
// console.log('5' + 3); // "53"
// console.log(4 + '5' + 3); // "124"
// console.log('5' + true); // "5true"
// console.log('5' + false); // "5false"
// console.log('5' + null); // "5null"
// console.log('5' + undefined); // "5undefined"
//
//
//
// TEMPLATE STRINGS
// const guestName = 'Mango';
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"
//
// const pricePerDroid = 800;
// let orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message);
//
//
//
// PROPERTIES
//
// const productName = 'Repair droid';
// console.log(productName.length); // 12
// console.log('Repair droid'.length); // 12
//
// const username = 'Poly';
// let message = `Username ${username} is ${username.length} characters long`;
// console.log(message); // Username Poly is 4 characters long
//
//
//
// ROW INDEXING
// const product = 'Repair droid';
// console.log(product[0]); // 'R'
// console.log(product[5]); // 'r'
// console.log(product[11]); // 'd'
//
// const product = 'Repair droid';
// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex]); // 'd'
// console.log(product[product.length - 1]); // 'd'
//
// const courseTopic = 'JavaScript essentials';
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);
//
//
//
// COMPARISON OPERATORS
//
// const a = 2;
// const b = 5;
// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true
// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false
//
// const age = 16;
// let isAdult = age >= 18;
// console.log(isAdult);
//
//
//
// EQUALITY OPERATORS
//
// Loose equality operators
//
// == equal
// != not equal
// console.log(5 == 5); // true
// console.log(5 == 3); // false
// console.log(5 != 3); // true
// console.log(5 != 5); // false
//
// Strict equality operators
//
// === equal
// !== not equal
// console.log(5 === 5); // true
// console.log(5 === '5'); // false
// console.log(5 !== '5'); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true
//
// const correctPassword = 'jqueryismyjam';
// const userPassword = 'mangodab3st';
// const isValid = correctPassword === userPassword;
// console.log(isValid);
//
//
//
// TYPE CONVERSION: number
//
// console.log(Number('5')); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number('Jacob')); // NaN
// console.log(Number('25px')); // NaN
// console.log('5' * 2); // 10
// console.log('10' - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4
// console.log('10' > 5); // true
// console.log(10 > '5'); // true
// console.log(5 > true); // true
// console.log(5 < true); // false
// console.log('5' < true); // false
//
// console.log(Number.parseInt('5')); // 5
// console.log(Number.parseInt('5.5')); // 5
// console.log(Number.parseInt('5cm')); // 5
// console.log(Number.parseInt('12qwe74')); // 12
// console.log(Number.parseInt('12.46qwe79')); // 12
// console.log(Number.parseInt('cm5')); // NaN
// console.log(Number.parseInt('')); // NaN
// console.log(Number.parseInt('qweqwe')); // NaN
//
// console.log(Number.parseFloat('5')); // 5
// console.log(Number.parseFloat('5.5')); // 5.5
// console.log(Number.parseFloat('3.14')); // 3.14
// console.log(Number.parseFloat('5cm')); // 5
// console.log(Number.parseFloat('5.5cm')); // 5.5
// console.log(Number.parseFloat('12qwe74')); // 12
// console.log(Number.parseFloat('12.46qwe79')); // 12.46
// console.log(Number.parseFloat('cm5')); // NaN
// console.log(Number.parseFloat('')); // NaN
// console.log(Number.parseFloat('qweqwe')); // NaN
//
// const value = '24.5px';
// const numerical = Number.parseFloat(value);
// console.log(numerical); // 24.5
//
//
//
// ARITHMETICAL FUNCTIONS
//
// the nearest integer that is less than or equal to the specified number
// console.log(Math.floor(1.3)); // 1
// console.log(Math.floor(1.7)); // 1
// // the nearest integer that is greater than or equal to the specified number
// console.log(Math.ceil(1.3)); // 2
// console.log(Math.ceil(1.7)); // 2
// // the value of a number after rounding to the nearest integer
// console.log(Math.round(1.3)); // 1
// console.log(Math.round(1.7)); // 2
// // the largest number from the set of numbers transmitted
// console.log(Math.max(20, 10, 50, 40)); // 50
// // the smallest number from the set of numbers transmitted
// console.log(Math.min(20, 10, 50, 40)); // 10
// // a random number in the range from 0 (inclusive) to 1 (exclusive)
// console.log(Math.random());
//
//
//
// FRACTIONAL NUMBERS
//
// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004
// //
// console.log(0.1 * 10 + 0.2 * 10); // 3
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3
// //
// console.log((0.1 + 0.2).toFixed(1)); // "0.3"
// console.log((5).toFixed(2)); // "5.00"
// console.log((8.762195).toFixed(4)); // "8.7622"
//
//
//
//
//
//
//
//
//
// FUNCTIONS
//
// function doStuff() {
//   console.log('Log inside multiply function');
// }
// doStuff(); // 'Log inside multiply function'
//
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }
// multiply(2, 3, 5); // "Result: 30"
// multiply(4, 8, 12); // "Result: 384"
// multiply(17, 6, 25); // "Result: 2550"
//
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
//
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
//
//
//
// RETURN
//
// function multiply(x, y, z) {
//   const product = x * y * z;
//   return product;
// }
// const result = multiply(2, 3, 5);
// console.log(result); // 30
//
// function multiply(x, y, z) {
//   return x * y * z;
// }
// const result = multiply(2, 3, 5);
// console.log(result); // 30
//
// function multiply(x, y, z) {
//   const product = x * y * z;
// }
// const result = multiply(2, 3, 5);
// console.log(result); // undefined
//
// function multiply(x, y, z) {
//   console.log('The code before return is executed as usual');
//   return x * y * z;
//   console.log('This code is never executed because it is after return');
// }
// console.log(multiply(2, 3, 5)); // 30
//
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }
// console.log('Log before multiply execution');
// multiply(2, 3, 5); // "Result: 30"
// console.log('Log after multiply execution');
//
//
// FUNCTION SCOPE
//
// Global variable
//
// const value = "I'm a global variable";
// function foo() {
//   console.log(value); // "I'm a global variable"
// }
// foo();
// console.log(value); // "I'm a global variable"
//
// function foo() {
//   // Local variable
//   const value = "I'm a local variable";
//   console.log(value); // "I'm a local variable"
// }
// foo();
// console.log(value); // ReferenceError: value is not defined
//
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   return orderedQuantity * pricePerItem;
// }
// const result = calculateTotalPrice(3, 400);
