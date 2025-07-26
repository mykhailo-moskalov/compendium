// console.log("".toUpperCase());

// // EVENT DELEGATION
//
// // EVENT BUBBLING
//
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
// parent.addEventListener("click", () => {
//   console.log("Parent click handler");
// });
// child.addEventListener("click", () => {
//   console.log("Child click handler");
// });
// descendant.addEventListener("click", () => {
//   console.log("Descendant click handler");
// });
//
//
// // TARGET ELEMENT
//
// const parent = document.querySelector("#parent");
// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });
//
//
// // BUBBLING STOP
//
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });
// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });
// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });
//
//
// // EVENT DELEGATION
//
// const box = document.querySelector("div.box");
// box.addEventListener("click", function (event) {
//   console.log(event.target);
// });
//
//
// // CHECKING THE EVENT TARGET
//
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");
// colorPalette.addEventListener("click", selectColor);
// function selectColor(e) {
//   console.log(e.target);

//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const selectedColor = e.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }
// createPaletteItems();
// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style = `background-color: ${color}; padding: 0; margin: 0; border: none; border-radius: 4px; width: 40px; height: 40px; cursor: pointer;`;
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
//
//
//
// // LIBRARIES
//
// // CONNECTING THE LIBRARY
//
// lodash
//
// console.log(_);
// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15
// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]
//
// basicLightbox
//
// const instance = basicLightbox.create(
//   `
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
//     <button type="button" data-action="close">Close the modal window</button>
// `
// );
// const openBtn = document.querySelector('button[data-action="open"]');
// console.log(openBtn);
// openBtn.addEventListener("click", () => instance.show());
//
//
//
// // DESTRUCTURING
//
// // DESTRUCTURING
//
// const user = {
//   name: "Jacob",
//   age: 32,
// };
// console.log(user.name); // Jacob
// console.log(user.age); // 32
//
// const { name, age } = user;
// console.log(name); // Jacob
// console.log(age); // 32
//
//
// // DESTRUCTURING OF OBJECTS
//
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const accessType = book.isPublic ? "pulbic" : "private";
// const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;
//
// const { title, author, isPublic, rating } = book;
// const accessType = isPublic ? "pulbic" : "private";
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
//
//
// // DESTRUCTURING NON-EXISTENT PROPERTIES
//
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const { title, bookTitle, coverImage, bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookTitle); // undefined
// console.log(coverImage); // undefined
// console.log(bookRating); // undefined
//
// const {
//   title,
//   author,
//   coverImage = "https://via.placeholder.com/640/480",
// } = book;
// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "https://via.placeholder.com/640/480"
//
// // RENAMING A VARIABLE
//
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38
//
//
// // DEFAULT VALUE
//
// const book = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };
// const {
//   title,
//   coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
// } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"
//
//
// // DESTRUCTURING IN CYCLES
//
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];
// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
//
// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
//
//
// // DESTRUCTURING PARAMETERS
//
// w/o
// function printUserInfo(user) {
//   console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
// }
// printUserInfo({
//   name: "Alice",
//   age: 25,
//   hobby: "dancing",
// }); // Name: Alice, Age: 25, Hobby: dancing
// w/
// function printUserInfo(user) {
//   const { name, age, hobby } = user;
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }
// printUserInfo({
//   name: "Alice",
//   age: 25,
//   hobby: "dancing",
// }); // Name: Alice, Age: 25, Hobby: dancing
//
// function printUserInfo({ name, age, hobby }) {
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }
// printUserInfo({
// 	name: "Alice",
// 	age: 25,
// 	hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing
//
//
// // PARAMETER OBJECT PATTERN
//
// function doStuffWithBook(title, pages, downloads, rating, isPublic) {
//   console.log(title);
//   console.log(pages);
// }
// // ❌
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);
//
// function doStuffWithBook(book) {
//   console.log(book.title);
//   console.log(book.pages);
// }
// function doStuffWithBook(book) {
//   const { title, pages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(pages);
// }
// function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
//   console.log(title);
//   console.log(pages);
// }
// // ✅
// doStuffWithBook({
//   title: "The Last Kingdom",
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });
//
//
// // DEEP DESTRUCTURING
//
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//     following: {
//       first: "Kim",
//       second: "Jaydon",
//     },
//   },
// };
// const {
//   name,
//   tag,
//   stats: {
//     followers,
//     views,
//     likes,
//     following: { first, second },
//   },
// } = user;
// const {
//   name,
//   tag,
//   stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
// } = user;
// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308
// console.log(first);
// console.log(second);
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
//
//
//
// // DESTRUCTURING ARRAYS
//
// // SYNTAX
//
// const color = [200, 255, 100];
// const [red, green, blue] = color;
// console.log(`rgb(${red}, ${green}, ${blue})`); // "rgb(200, 255, 100)"
//
//
// // DEFAULT VALUE
//
// const color = [200, 100, 255];
// const [red, green, blue, alfa = 0.3] = color;
// console.log(`rgba(${red}, ${green}, ${blue}, ${alfa})`); // "rgba(200, 255, 100, 0.3)"
//
//
// // PARTIAL DESTRUCTURING
//
// const color = [200, 255, 100];
// const [red, ...otherColors] = color;
// console.log(red); // 200
// console.log(otherColors); // [255, 100]
//
//
// // SKIPPING VALUES
//
// const rgb = [200, 100, 255];
// const [, , blue] = rgb;
// console.log(`Blue: ${blue}`); // "Blue: 255"
//
//
// // DESTRUCTURING PARAMETERS
//
// function printFruits(fruits) {
//   console.log(fruits[0], fruits[1], fruits[2]);
// }
// function printFruits([firstFruit, secondFruit, thirdFruit]) {
//   console.log(firstFruit, secondFruit, thirdFruit);
// }
// printFruits(["apple", "banana", "orange"]); // "apple banana orange"
//
