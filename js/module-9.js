// // JSON (JavaScript Object Notation) EXTENSION
//
// // JSON STANDARD
//
// ../module-9.json
//
//
// // CONVERTING TO/FROM JSON
//
// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
// };
// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
//
// const object = JSON.parse(json);
// console.log(object); // {name: 'Mango', age: 3, isGoodBoy: true}
// console.log(dog.name); // "Mango"
//
// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };
// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
//
// const json = JSON.stringify(() => console.log("Well, this is awkward"));
// console.log(json); // undefined
//
//
// // ERROR HANDLING AND SOLUTION
//
// const data = JSON.parse("Well, this is awkward"); // Error
// console.log("❌ You won't see this log");
// const data = JSON.parse('{username: "Mango"}'); // Error
// console.log("❌ You won't see this log");
//
// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }
// console.log("✅ This is fine, we handled parsing error in try...catch");
//
//
//
// // WEB STORAGE
//
// // LOCAL STORAGE
//
// console.log(window.localStorage); // Storage {length: 0}
// console.log(localStorage); // Storage {length: 0}
//
//
// // SETTING DATA
//
// localStorage.setItem("ui-theme", "light");
// console.log(localStorage); // Storage {ui-theme: "light", length: 1}
//
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));
//
//
// // GETTING DATA
//
// console.log(localStorage.getItem("ui-theme")); // "light"
// console.log(localStorage.getItem("key-that-does-not-exist")); // null
//
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));
// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object
//
//
// // REMOVING DATA
//
// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null
//
// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");
// console.log(localStorage); // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}
// localStorage.clear();
// console.log(localStorage); // Storage {length: 0}
//
//
// // SESSION STORAGE
//
// console.log(window.sessionStorage); // Storage {length: 0}
//
// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//   "tickets",
//   JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage); // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}
//
// console.log(sessionStorage.getItem("user-id")); // "123"
// console.log(JSON.parse(sessionStorage.getItem("tickets"))); // { from: "Lviv", to: "Kyiv", quantity: 2 }
//
// sessionStorage.removeItem("tickets");
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}
// sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}
//
//
// // CASE: FORM WITH A MESSAGE
//
// const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message;
// const localStorageKey = "goit-example-message";
// textarea.value = localStorage.getItem(localStorageKey) ?? "";
// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });
// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
//
//
//
// // CODE MODULARITY
//
// // ESM (ECMAScript modules)
//
// export default function makeMessage(username) {
//   return `Welcome, ${username}!`;
// }
// import makeMessage from "./makeMessage";
// console.log(makeMessage("Jacob")); // "Welcom, Jacob!"
//
//
// // NAMED EXPORT
//
// export const makeMessage = (username) => {
//   return `Welcome, ${username}!`;
// };
// export const levels = ["easy", "medium", "hard"];
// import { makeMessage, levels } from "./makeMessage";
// console.log(makeMessage("Jacob")); // "Welcom, Jacob!"
// console.log(levels); // ["easy", "medium", "hard"]
//
//
// // RENAMED EXPORT
//
// export const original = "Hello, World!";
// import { original as renamed } from './myModule.js';
// console.log(renamed); // "Hello, World!"
//
//
// // NAMESPACE IMPORT
//
// export const name = "Mango";
// export const age = 26;
// export const email = "mango@mail.com";
// import * as user from "./myModule.js";
// console.log(user.name); // "Mango"
// console.log(user.age); // 26
// console.log(user.email); // "mango@mail.com"
