// // ASYNCHRONY
//
// // ASYNCHRONOUS CODE
//
// console.log("First log"); // First log
// console.log("Second log"); // Second log
// console.log("Third log"); // Third log
//
// console.log("First log"); // Executed first
// setTimeout(() => {
//   console.log("Second log"); // Executed third, after 2000 milliseconds (2 seconds)
// }, 2000);
// console.log("Third log"); // Executed second
//
//
// // TIME-OUT
//
// const button = document.querySelector("button");
// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);
//   console.log(timerId);
// };
// button.addEventListener("click", onClick);
//
//
// // TIME-OUT CANCELLATION
//
// const greet = () => {
//   console.log("Hello!");
// };
// const timerId = setTimeout(greet, 3000);
// clearTimeout(timerId);
//
// const setBtn = document.querySelector(".js-set");
// const clearBtn = document.querySelector(".js-clear");
// let timeoutId;
// setBtn.addEventListener("click", () => {
//   timeoutId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);
// });
// clearBtn.addEventListener("click", () => {
//   clearTimeout(timeoutId);
//   console.log(`Timeout with id ${timeoutId} has stopped!`);
// });
//
//
// // INTERVAL
//
// const startBtn = document.querySelector(".js-start");
// startBtn.addEventListener("click", () => {
//   const intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });
//
//
// // INTERVAL CANCELLATION
//
// const greet = () => {
//   console.log("Hello!");
// };
// const intervalId = setInterval(greet, 3000);
// clearInterval(intervalId);
//
// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let intervalId = null;
// startBtn.addEventListener("click", () => {
//   intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });
// stopBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   console.log(`Interval with id ${intervalId} has stopped!`);
// });
//
//
//
//
// // DATE AND TIME
//
// // DATE CREATION
//
// const date = new Date();
// console.log(date); // "Tue Jul 29 2025 23:52:55 GMT-0400 (Eastern Daylight Time)"
//
//
// // DATE SETTING
//
// console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16T14:25")); // "Sat Mar 16 2030 14:25:00 GMT+0200"
// console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"
//
// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 "
//
//
// // UNIX TIME
//
// console.log(new Date(0)); // "Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)"
// console.log(new Date(15000)); // "Wed Dec 31 1969 19:00:15 GMT-0500 (Eastern Standard Time)"
//
// const date = new Date();
// console.log(date.getTime()); // 1753849605066
//
// const time = Date.now(); // 1753849904710
//
// const startTime = Date.now();
// for (let i = 0; i <= 10000; i++) {
//   console.log(1);
// }
// const endTime = Date.now();
// const elapsedTime = `${Math.floor((endTime - startTime) / 60)} seconds ${
//   (endTime - startTime) % 60
// } milliseconds`;
// console.log(`Elapsed time: ${elapsedTime}`);
//
//
// // GETTERS && SETTERS
//
// const date = new Date("March 16, 2030 14:25:00");
// console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT-0400 (Eastern Daylight Time)"
// console.log("Day: ", date.getDate()); // 16
// console.log("Day of the week: ", date.getDay()); // 6
// console.log("Month: ", date.getMonth()); // 2
// console.log("Full year: ", date.getFullYear()); // 2030
// console.log("Hours: ", date.getHours()); // 14
// console.log("Minutes: ", date.getMinutes()); // 25
// console.log("Seconds: ", date.getSeconds()); // 0
// console.log("Milliseconds: ", date.getMilliseconds()); // 0
//
// date.setMinutes(50);
// console.log(date); // "Sat Mar 16 2030 14:50:00 GMT-0400 (Eastern Daylight Time)"
// date.setFullYear(2040);
// console.log(date); // "Fri Mar 16 2040 14:50:00 GMT-0400 (Eastern Daylight Time)"
// date.setMonth(4);
// console.log(date); // "Wed May 16 2040 14:50:00 GMT-0400 (Eastern Daylight Time)"
//
//
//
// // PROMISES
//
// // PROMICE CREATION
//
// const promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
// });
//
// const isSuccess = true;
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });
// console.log(promise); // Об'єкт промісу
//
//
// // METHODS then() && catch() && finally()
//
// const isSuccess = true;
// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });
// // Registering promise callbacks
// promise
//   .then((value) => console.log(value)) // "Success! Value passed to resolve function"
//   .catch((error) => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled";
//
//
// // PROMISES CHAIN
//
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });
// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });
//
//
// // FUNCTIONS PROMISIFICATION
//
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);
//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;
//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };
// fetchUserFromServer(
//   "Mango",
//   (user) => console.log(user),
//   (error) => console.error(error)
// );
//
// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);
//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;
//       if (isSuccess) {
//         resolve("success value"); // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject("error"); // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };
// fetchUserFromServer("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));
//
//
// // Promise.resolve() && Promise.reject()
//
// new Promise((resolve) => resolve("success value"))
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));
// Promise.resolve("success value")
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));
//
// new Promise((reject) => reject("error"))
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));
// Promise.reject("error")
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));
//
//
// // SYNCHRONOUS FUNCTIONS PROMISIFICATION
//
// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (!guestName) {
//     onError("Guest name must not be empty");
//   } else {
//     onSuccess(`Welcome ${guestName}`);
//   }
// };
// makeGreeting(
//   "Mango",
//   (greeting) => console.log(greeting),
//   (error) => console.error(error)
// );
//
// const makeGreeting = (guestName) => {
//   return new Promise((resolve, reject) => {
//     if (!guestName) {
//       reject("Guest name must not be empty");
//     } else {
//       resolve(`Welcome ${guestName}`);
//     }
//   });
// };
// makeGreeting("Mango")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.error(error));
//
// const makeGreeting = (guestName) => {
//   if (!guestName) {
//     return Promise.reject("Guest name must not be empty");
//   } else {
//     return Promise.resolve(`Welcome ${guestName}`);
//   }
// };
// makeGreeting("Mango")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.log(error));
//
//
// // MAKING PROMISES WITH TIME-OUT
//
// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
// };
// makePromise({ value: "A", delay: 1000 })
//   .then((value) => console.log(value)) // "A"
//   .catch((error) => console.error(error));
// makePromise({ value: "B", delay: 3000 })
//   .then((value) => console.log(value)) // "B"
//   .catch((error) => console.error(error));
// makePromise({ value: "C", delay: 2000, shouldResolve: false })
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error)); // "C"
//
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Fulfilled A");
//   }, 1000);
// })
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error));
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Fulfilled B");
//   }, 3000);
// })
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error));
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Rejected C");
//   }, 2000);
// })
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error)); // "Rejected C"
//
//
//
// // HANDLING MULTIPLE PROMISES
//
// // METHOD Promise.all()
//
// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);
// Promise.all([p1, p2, p3])
//   .then((values) => console.log(values)) // [1, 2, 3]
//   .catch((error) => console.error(error));
//
// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);
// Promise.all([p1, p2, p3])
//   .then((values) => console.log(values))
//   .catch((error) => console.error(error)); // "Rejected promise 2"
//
//
// // METHOD Promise.allSettled()
//
// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);
// Promise.allSettled([p1, p2, p3]).then((values) => console.log(values));
// // [
// //   { status: "fulfilled", value: 1},
// //   { status: "rejected", value: "Rejected promise 2"},
// //   { status: "fulfilled", value: 3}
// // ]
//
//
// // METHOD Promise.race()
//
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 2000);
// });
// Promise.race([p1, p2])
//   .then((value) => console.log(value)) // 1
//   .catch((error) => console.error(error));
//
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 2000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 1000);
// });
// Promise.race([p1, p2])
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error)); // 2
