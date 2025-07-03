// // ARRAYS
//
// const planets = ['Earth', 'Mars', 'Venus']; // strings array
// const numbers = [1, 2, 3, 4, 5]; // numbers array
// const mixed = ['apple', 10, true]; // array with elements of different types
//
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
//
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
//
// fruits[1] = 'peach';
// fruits[3] = 'banana';
//
// console.log(fruits.length);
// if (fruits.length > 3) {
//   console.log('More than 3 elements');
// } else {
//   console.log('3 or less elements');
// }
//
// function getOrderQuantity(order) {
//   return order.length;
// }
// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana'])); // 4
// console.log(getOrderQuantity(['apple', 'banana'])); // 2
// console.log(getOrderQuantity(['apple', 'banana', 'pear'])); // 3
//
// const lastElementIndex = fruits.length - 1;
// console.log(fruits[lastElementIndex]);
//
// function getLastElementMeta(array) {
//   const firstElement = array.length - 1;
//   const secondElement = array[firstElement];
//   return (newArray = [firstElement, secondElement]);
// }
// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
// console.log(getLastElementMeta(['apple', 'peach', 'pear']));
// console.log(getLastElementMeta(['apple', 'peach']));
// console.log(getLastElementMeta(['apple']));
//
// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const secondElement = array[array.length - 1];
//   const newArray = [firstElement, secondElement];
//   return newArray;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
//
// let a = 5;
// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// // Assignment by value, another cell will be created in memory, into which the value 5 will be copied
// // Let's change the value of a
// a = 10;
// console.log(a); // 10
// console.log(b); // 5 // The value of b has not changed because it is a separate copy
//
// const a = ['Mango', 'Poly'];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]
//
// const a = ['Mango', 'Poly'];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]
// a[1] = 'Jacob';
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]
// b[0] = 'Ajax';
// console.log(a); // ["Ajax", "Jacob"]
// console.log(b); // ["Ajax", "Jacob"]
//
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr1 === arr2); // false
//
// const array = [1, true, 'Poly'];
// console.log(String(array)); // "1,true,Poly"
// console.log(array + '5'); // "1,true,Poly5"
//
// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN
//
// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];
// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true
// if (emptyArray) {
//   console.log('if is in progress');
// } else {
//   console.log('else is not performed');
// }
// if (nonEmptyArray) {
//   console.log('if is in progress');
// } else {
//   console.log('else is not performed');
// }
//
// const words = ['JavaScript', 'is', 'amazing'];
// console.log(words.join('')); // 'JavaScriptisamazing'
// console.log(words.join(' ')); // 'JavaScript is amazing'
// console.log(words.join('-')); // 'JavaScript-is-amazing'
//
// function transformString(string) {
//   const words = string.split('_');
//   return words.join('-');
// }
// console.log(transformString('user_age')); // "user-age"
// console.log(transformString('price_per_droid')); // "price-per-droid"
//
// function getLength(array) {
//   return String(array.join('')).length;
// }
// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
// console.log(getLength(['M', 'a', 'n', 'g', 'o']));
// console.log(getLength(['top', 'picks', 'for', 'you']));
//
// const name = 'Mango';
// const letters = name.split('');
// console.log(letters); // ["M", "a", "n", "g", "o"]
// const message = 'JavaScript essentials';
// const words = message.split(' ');
// console.log(words); // ["JavaScript", "essentials"]
// const slug = 'amazing-french-recipes';
// const slugParts = slug.split('-');
// console.log(slugParts); // ["amazing", "french", "recipes"]
//
// function calculateEngravingPrice(message, pricePerWord) {
//   return (totalPrice = message.split(' ').length * pricePerWord);
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));
//
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
// const result = planets.slice(1, 3);
// console.log(result); // ["Mars", "Venus"]
// console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]
//
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
//
// const firstArray = ['Mercury', 'Venus'];
// const secondArray = ['Mars', 'Jupiter'];
// const result = firstArray.concat(secondArray);
// console.log(firstArray); // ["Mercury", "Venus"];
// console.log(secondArray); // ["Mars", "Jupiter"];
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];
//
// const firstArray = ['Mercury', 'Venus'];
// const secondArray = ['Mars', 'Jupiter'];
// const thirdArray = ['Saturn', 'Neptune'];
// console.log(firstArray.concat(secondArray, thirdArray)); // ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];
// console.log(firstArray.concat(thirdArray, secondArray)); // ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];
//
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
//
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Poly'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1
//
// function getSlice(array, value) {
//   return array.slice(0, array.indexOf(value) + 1);
// }
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'));
//
// const planets = ['Earth', 'Mars', 'Venus'];
// planets.push('Jupiter');
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// planets.push('Saturn', 'Neptune');
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]
//
// const tags = [];
// for (let i = 0; i < 3; i++) {
//   tags.push(`tag-${i}`);
// }
// console.log(tags); // ["tag-0", "tag-1", "tag-2"]
//
// function createArrayOfNumbers(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
//
// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets.length);
// for (let i = 0; i < planets.length; i++) {
//   console.log(planets[i]);
// }
//
// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     sum += order[i];
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//
// function getEvenNumbers(start, end) {
//   let array = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
//
// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets.includes('Earth')); // true
// console.log(planets.includes('Mars')); // true
// console.log(planets.includes('Venus')); // true
// console.log(planets.includes('Jupiter')); // false
//
// const fruits = ['apple', 'banana', 'orange'];
// if (fruits.includes('banana')) {
//   console.log('The array has an element banana');
// } else {
//   console.log('Array does not contain banana element');
// }
//
// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }
// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot'));
//
// function getCommonElements(array1, array2) {
//   let totalArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     const element = array1[i];
//     if (array2.includes(element)) {
//       totalArray.push(element);
//     }
//   }
//   return totalArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
//
// const planets = ['Earth', 'Mars', 'Venus'];
// for (const planet of planets) {
//   console.log(planet);
// }
//
// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// console.log(sum(2, 6));
//
// function multiply() {
//   let total = 1;
//   for (const arg of arguments) {
//     total *= arg;
//   }
//   return total;
// }
// console.log(multiply(1, 2, 3));
// console.log(multiply(1, 2, 3, 4));
// console.log(multiply(1, 2, 3, 4, 5));
//
// function foo() {
//   const args = Array.from(arguments);
//   return args.join('-');
// }
// console.log(foo(1, 2, 3));
//
// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }
// console.log(createReversedArray(12, 4, 77));
//
// function greet(username = 'Guest') {
//   console.log(`Hello, ${username}!`);
// }
// greet('Jacob'); // "Hello, Jacob!"
// greet(); // "Hello, Guest!"
//
// function count(from, to, step = 1) {
//   let total = [];
//   for (let i = from; i <= to; i += step) {
//     total.push(i);
//   }
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);
//   return total;
// }
// console.log(count(1, 15, 4)); // "from: 1, to: 15, step: 4"
// console.log(count(1, 15)); // "from: 1, to: 15, step: 1"
//
// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));
// console.log(calculateTax(100, 0.2));
// console.log(calculateTax(200, 0.2));
// console.log(calculateTax(100, 0.3));
// console.log(calculateTax(200, 0.3));
// console.log(calculateTax(100));
// console.log(calculateTax(200));
