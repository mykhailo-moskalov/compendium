// // THE if STATEMENT
//
// let price = 0;
// const subscription = "pro";
// if (subscription === "pro") {
//   price = 100;
// }
// console.log(price); // 100
//
// let price = 0;
// const subscription = "free";
// if (subscription === "pro") {
//   price = 100;
// }
// console.log(price); // 0
//
// function getPrice(subscription) {
//   let price = 0;
//   if (subscription === "pro") {
//     price = 100;
//   }
//   return price;
// }
// console.log(`Your subscription price is ${getPrice("free")} dollars per year.`); // 0
// console.log(`Your subscription price is ${getPrice("pro")} dollars per year.`); // 100
//
// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = "You are an adult";
//   }
//   return message;
// }
//
//
// // THE if...else STATEMENT
//
// const grade = 85;
// if (grade >= 70) {
//   console.log("Satisfactory");
// } else {
//   console.log("Unsatisfactory");
// }
//
// const grade = 40;
// if (grade >= 70) {
//   console.log("Satisfactory");
// } else {
//   console.log("Unsatisfactory");
// }
//
// function checkGrade(grade) {
//   if (grade >= 70) {
//     return "Satisfactory";
//   } else {
//     return "Unsatisfactory";
//   }
// }
// console.log(checkGrade(75)); // Satisfactory
// console.log(checkGrade(40)); // Unsatisfactory
//
// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
//
//
// // THE else...if STATEMENT
//
// const grade = 85;
// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }
//
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "There are no products in the order!";
//   } else if (ordered > available) {
//     return "Your order is too large, there are not enough items in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
//
//
// // TERNARY OPERATOR
//
// let type;
// const age = 20;
// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }
// console.log(type); // 'adult'
//
// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // 'adult'
//
// const a = 5;
// const b = 10;
// let biggerNumber;
// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }
// console.log(biggerNumber); // 10
//
// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;
// console.log(biggerNumber); // 10
//
// function getBiggerNumber(a, b) {
//   return a > b ? a : b;
// }
// console.log(getBiggerNumber(5, 10)); // 10
// console.log(getBiggerNumber(20, 15)); // 20
// console.log(getBiggerNumber(7, 7)); // 7
//
// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return correctPassword === password
//     ? "Access granted"
//     : "Access denied, wrong password!";
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
//
//
// // THE switch STATEMENT
//
// const fruit = "apple";
// switch (fruit) {
//   case "apple":
//     console.log("Apple selected");
//     break;
//   case "banana":
//     console.log("Banana selected");
//     break;
//   case "orange":
//     console.log("Orange selected");
//     break;
//   default:
//     console.log("The fruit is unknown");
// }
//
//
// // THE break STATEMENT
//
// const day = 3;
// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("This is a working day");
//     break;
//   case 6:
//   case 7:
//     console.log("It is a day off");
//     break;
//   default:
//     console.log("Invalid");
// }
//
// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//     case "professional":
//       return 20;
//     case "organization":
//       return 50;
//     default:
//       return "Invalid subscription type!";
//   }
// }
// console.log(getSubscriptionPrice("professional")); // 20
// console.log(getSubscriptionPrice("organization")); // 50
// console.log(getSubscriptionPrice("starter")); // 0
// console.log(getSubscriptionPrice("random")); // Invalid subscription type!
// console.log(getSubscriptionPrice("premium")); // Invalid subscription type!
//
//
//
//
//
// // LOGICAL OPERATORS
//
//
// //TYPE CONVERSION: boolean (logical)
//
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
//
// if (null) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }
// if (0) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }
// if (5) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }
//
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true
//
// if ("") {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }
// if ("batman") {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }
//
//
// // LOGICAL and (&&)
//
// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"
// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"
// console.log(3 && true); // true
// console.log(true && 3); // 3
//
// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0
// console.log(3 && false); // false
// console.log(false && 3); // false
// console.log(0 && ""); // 0
// console.log("" && 0); // ""
//
// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true
// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false
//
// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;
// if (screenWidth <= sm) {
//   console.log("Mini mobile screen");
// } else if (screenWidth > sm && screenWidth <= md) {
//   console.log("Mobile screen");
// } else if (screenWidth > md && screenWidth <= lg) {
//   console.log("Tablet screen");
// } else {
//   console.log("Desktop screen");
// }
//
// function getScreenType(screenWidth) {
//   const sm = 320;
//   const md = 768;
//   const lg = 1200;
//   if (screenWidth < sm) {
//     return "Mini mobile screen";
//   } else if (screenWidth >= sm && screenWidth < md) {
//     return "Mobile screen";
//   } else if (screenWidth >= md && screenWidth < lg) {
//     return "Tablet screen";
//   } else {
//     return "Desktop screen";
//   }
// }
// console.log(getScreenType(319)); // "Mini mobile screen"
// console.log(getScreenType(320)); // "Mobile screen"
// console.log(getScreenType(768)); // "Tablet screen"
// console.log(getScreenType(1200)); // "Desktop screen"
//
// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));
//
//
// // LOGICAL or (||)
//
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(5 || false); // 5
// console.log(false || 5); // 5
// console.log("hello" || 0); // "hello"
// console.log(0 || "hello"); // "hello"
//
// console.log(5 || 3); // 5
// console.log(3 || 5); // 3
// console.log("mango" || "poly"); // "mango"
// console.log("poly" || "mango"); // "poly"
//
// console.log(0 || false); // false
// console.log(false || 0); // 0
// console.log(null || ""); // ""
// console.log("" || null); // null
//
// const a = 5;
// console.log(a < 10 || a > 30); // true || false -> true
// const b = 50;
// console.log(b < 10 || b > 30); // false || true -> true
// const c = 20;
// console.log(c - 20 || c * 2); // 0 || 40 -> 40
//
// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;
// if (screenWidth <= sm || screenWidth > md) {
//   console.log("Mini mobile or Tablet screen");
// }
//
// function checkAccess(subType) {
//   if (subType === "pro" || subType === "vip") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("free"));
//
//
// // LOGICAL not (!)
//
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true
//
// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }
//
// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }
//
// function canUserChat(isOnline, isBlocked) {
//   const canChat = isOnline && !isBlocked;
//   if (canChat) {
//     return "Can type in chat!";
//   } else {
//     return "Blocked from typing in chat!";
//   }
// }
// console.log(canUserChat(true, false)); // "Can type in chat!"
// console.log(canUserChat(true, true)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, true)); // "Blocked from typing in chat!"
//
// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }
// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));
//
//
//
//
//
// // STRING METHODS
//
//
// // METHOD slice()
//
// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'
//
// console.log(fullName.slice(1)); // 'acob Mercer'
// console.log(fullName.slice(3)); // 'ob Mercer'
//
// console.log(fullName.slice()); // 'Jacob Mercer'
//
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);
// console.log(fullName); // "Jacob Mercer"
// console.log(firstName); // "Jacob"
// console.log(lastName); // "Mercer"
//
// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));
//
//
// // METHODS toLowerCase() AND toUpperCase
//
// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"
//
// console.log("saMsUng" === "samsung"); // false
// console.log("saMsUng" === "SAMSUNG"); // false
//
// const brandName = "samsung";
// const userInput = "saMsUng";
// const lowercaseInput = userInput.toLowerCase();
// console.log(brandName); // 'samsung'
// console.log(userInput); // 'saMsUng'
// console.log(userInput === brandName); // false
// console.log(lowercaseInput); // 'samsung'
// console.log(lowercaseInput === brandName); // true
//
// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.toUpperCase();
//   } else if (to === "lower") {
//     return input.toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Big SALE", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "uppr"));
//
//
// // METHOD includes()
//
// const username = "Jacob Mercer";
//
// console.log(username.includes("Jacob")); // true
// console.log(username.includes("John")); // false
// console.log(username.includes("Mercer")); // true
// console.log(username.includes("Doe")); // false
//
// console.log(username.includes("Jacob")); // true
// console.log(username.includes("jacob")); // false
// console.log(username.includes("Mercer")); // true
// console.log(username.includes("mercer")); // false
//
// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");
// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }
//
// function checkForName(fullName, firstName) {
//   if (fullName.toLowerCase().includes(firstName.toLowerCase())) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));
//
//
// // METHODS startsWith() AND endsWith()
//
// const str = 'Hello, world!';
// console.log(str.startsWith('Hello')); // true
// console.log(str.startsWith('hello')); // false
//
// console.log(str.endsWith('world!')); // true
// console.log(str.endsWith('World!')); // false
//
// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return 'File extension matches';
//   } else {
//     return 'File extension does not match';
//   }
// }
// console.log(checkFileExtension('styles.css', '.css'));
// console.log(checkFileExtension('styles.css', '.js'));
// console.log(checkFileExtension('app.js', '.js'));
// console.log(checkFileExtension('app.js', '.html'));
// console.log(checkFileExtension('index.html', '.html'));
// console.log(checkFileExtension('index.html', '.css'));
// console.log(checkFileExtension('index.html', '.js'));
//
//
// // METHOD indexOf()
//
// const message = 'Welcome to Bahamas!';
// const index = message.indexOf('to');
// console.log(index); // 8
//
// const index = message.indexOf('hello');
// console.log(index); // -1
//
// function getFileName(file) {
//   if (file.includes('.')) {
//     return file.slice(0, file.indexOf('.'));
//   } else {
//     return file.slice();
//   }
// }
// console.log(getFileName('styles.css'));
// console.log(getFileName('app.js'));
// console.log(getFileName('app'));
// console.log(getFileName('index.js'));
// console.log(getFileName('index.html'));
// console.log(getFileName('index.css'));
// console.log(getFileName('index'));
//
//
// // METHOD trim()
//
// const input = ' JavaScript is awesome!    ';
// const trimmedInput = input.trim();
// console.log(trimmedInput); // "JavaScript is awesome!"
// console.log(input); // " JavaScript is awesome!    "
//
// function createFileName(name, ext) {
//   return `${name.trim()}.${ext.trim()}`;
// }
// console.log(createFileName(' order ', 'txt'));
// console.log(createFileName('report ', 'csv'));
// console.log(createFileName(' presentation', 'xml'));
//
//
//
//
//
// // CYCLES
//
// CYCLE while
//
// let count = 1;
// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }
//
// let clientCounter = 18;
// const maxClients = 25;
// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }
//
// function countClients(clientCounter, maxClients) {
//   let counter = clientCounter;
//   while (counter <= maxClients) {
//     console.log(counter);
//     counter += 1;
//   }
// }
// countClients(18, 25);
//
// function calculateTotal(number) {
//   let total = 0;
//   let counter = 1;
//   while (counter <= number) {
//     total += counter;
//     counter += 1;
//   }
//   return total;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
//
//
// // CYCLE do...while
//
// let count = 0;
// do {
//   console.log(`Count: ${count}`);
//   count++; // ++ === += 1
// } while (count < 5);
//
//
// // CYCLE for
//
// for (let i = 0; i <= 20; i += 5) {
//   console.log(`The number is ${Number(i)}`);
// }
//
// for (let i = 20; i >= 0; i -= 5) {
//   console.log(`The number is ${Number(i)}`);
// }
//
// function sumUpTo(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(10)); // 55
// console.log(sumUpTo(0)); // 0
//
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(0));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
//
//
// // INCREMENT AND DECREMENT
//
// let x = 5;
//
// const y = ++x;
// console.log(x); // 6
// console.log(y); // 6
//
// const y = x++;
// console.log(x); // 6
// console.log(y); // 5
//
// const y = --x;
// console.log(x); // 4
// console.log(y); // 4
//
// const y = x--;
// console.log(x); // 4
// console.log(y); // 5
//
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
//
// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 2) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));
//
//
// // STATEMENT: break
//
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     console.log('Met the number 5, interrupt the execution of the cycle');
//     break;
//   }
// }
// console.log('Log after cycle');
//
// const start = 6;
// const end = 17;
// let number;
// for (number = start; number < end; number++) {
//   if (number % 5 === 0) {
//     console.log(number);
//     break;
//   }
// }
//
//
// // STATEMENT: break AND FUNCTIONS
//
// function findNumber(max, target) {
//   console.log('Log in the body of the function before the cycle');
//   for (let i = 4; i <= max; i++) {
//     console.log('Current counter value i:', i);
//     if (i === target) {
//       console.log(`Found the target number ${target}, interrupt the cycle`);
//       break;
//     }
//   }
//   console.log('Log in body function after cycle');
// }
// findNumber(10, 6);
// console.log('Log after exiting function');
//
// function findNumber(max, target) {
//   console.log('Log in the body of the function before the cycle');
//   for (let i = 4; i <= max; i++) {
//     console.log('Current counter value i:', i);
//     if (i === target) {
//       console.log(
//         `Found the target number ${target}, we make a return, interrupting the loop and function`
//       );
//       return i;
//     }
//   }
//   console.log('Log in body function after cycle');
// }
// const result = findNumber(10, 6);
// console.log('Log after exiting function');
// console.log(`Result of function execution ${result}`);
//
// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));
