// // OBJECTS
//
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   public: true,
//   rating: 8.38,
// };
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
//
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
//
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"
// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]
// const bookPrice = book.price;
// console.log(bookPrice); // undefined
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
//
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swimming', 'music', 'sci-fi'],
// };
// const userLocation = user.location;
// console.log(userLocation); // {country: "Jamaica", city: "Ocho Rios"}
// const country = user.location.country;
// console.log(country); // "Jamaica"
// const hobbies = user.hobbies;
// console.log(hobbies); // ["swimming", "music", "sci-fi"]
// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"
// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
//
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// console.log(book.title); // "The Last Kingdom"
// console.log(book['title']); // "The Last Kingdom"
// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book['genres']); // ["historical prose", "adventure"]
// const propKey = 'author';
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
//
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// book.rating = 9;
// book.isPublic = false;
// book.genres.push('drama');
// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
//
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };
// console.log(book);
//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';
// console.log(apartment);
//
// const name = 'Henry Sibola';
// const age = 25;
// const user = {
//   name: name,
//   age: age,
// };
// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25
//
// const name = 'Henry Sibola';
// const age = 25;
// const user = {
//   name,
//   age,
// };
// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25
//
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];
// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
//
// const propName = 'name';
// const user = {
//   age: 25,
// };
// user[propName] = 'Henry Sibola';
// console.log(user.name); // "Henry Sibola"
//
// const propName = 'name';
// const user = {
//   age: 25,
//   [propName]: 'Henry Sibola',
// };
// console.log(user.name); // "Henry Sibola"
//
// const emailInputName = 'email';
// const passwordInputName = 'password';
// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };
//
//
// // OBJECT SEARCH
//
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }
//
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
//
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
//
// const book = {
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }
//
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);
// console.log(keys);
//
// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
//
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]
// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
//
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
//
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
//
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }
//
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// let hexColors = [];
// let rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
//
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley' },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky' },
// ];
// const authorToSearchFor = 'Robert Sheckley';
// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//   }
// }
//
// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));
//
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.2 },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 9 },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 6.8,
//   },
// ];
// const titles = [];
// for (const book of books) {
//   titles.push(book.title);
// }
// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]
//
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.2 },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 9 },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 6.8,
//   },
// ];
// let totalRating = 0;
// for (const book of books) {
//   totalRating += book.rating;
// }
// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8
//
// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   const properties = [];
//   for (const product of products) {
//     if (propName in product) {
//       properties.push(product[propName]);
//     }
//   }

//   return properties;
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));
//
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));
//
//
//
// const obj = {
//   method(value) {
//     console.log(`I'm a method with ${value}!`);
//   },
// };
// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"
//
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
// };
// console.log(bookShelf.getBooks()); // "Returning all books"
// console.log(bookShelf.addBook('New book 1')); // "Adding book New book 1"
// console.log(bookShelf.addBook('New book 2')); // "Adding book New book 2"
//
// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));
//
// const bookShelf = {
//   books: ['The Last Kingdom', 'The Mist'],
//   getBooks() {
//     console.log(this);
//   },
// };
// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}
//
// const bookShelf = {
//   books: ['The Last Kingdom', 'The Mist'],
//   getBooks() {
//     return this.books;
//   },
// };
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]
//
// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());
//
// const bookShelf = {
//   books: ['The Last Kingdom'],
// };
// bookShelf.books.push('The Mist');
// console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]
//
// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// };
// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]
//
// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion('Invisibility');
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion('Power potion');
// console.log(atTheOldToad.getPotions());
//
// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
// };
// bookShelf.addBook({ title: 'Dream Guardian', rating: 9 });
// console.log(bookShelf.getBooks());
//
// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;
//     for (const book of this.books) {
//       totalRating += book.rating;
//     }
//     return totalRating / this.books.length;
//   },
// };
// console.log(bookShelf.getAvarageRating()); // 7
//
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());
//
// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       if (book.title === bookName) {
//         book.rating = newRating;
//       }
//     }
//   },
// };
// bookShelf.changeRating('The Mist', 9);
// bookShelf.changeRating('The Last Kingdom', 4);
// console.log(bookShelf.books);
//
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// atTheOldToad.updatePotionName("Speed potion", "Polymorth");
// console.log(atTheOldToad.getPotions());
//
//
//
// function multiply(a, b) {
//   console.log(a, b);
// }
// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2
// multiply(1, 2, 3, 4); // 1 2
//
// function multiply() {
//   console.log(arguments);
// }
// multiply(1, 2); // псевдомасив [1, 2]
// multiply(1, 2, 3); // псевдомасив [1, 2, 3]
// multiply(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4]
//
// function multiply(...args) {
//   console.log(args);
// }
// multiply(1, 2); // [1, 2]
// multiply(1, 2, 3); // [1, 2, 3]
// multiply(1, 2, 3, 4); // [1, 2, 3, 4]
//
// function foo(...args) {
//   console.log(args);
// }
// foo("a", "b");
//
// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
//
// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }
// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3]
// multiply(1, 2, 3, 4); // 1 2 [3, 4]
//
// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (const arg of arguments) {
//     if (arg > value) {
//       sum += arg;
//     }
//   }
//   return sum;
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
//
// console.log(Math.max(14, -4, 25, 8, 11));
//
// const temps = [14, -4, 25, 8, 11];
// console.log(temps); // [14, -4, 25, 8, 11]
// console.log(Math.max(temps)); // NaN
//
// const temps = [14, -4, 25, 8, 11];
// console.log(...temps); // 14 -4 25 8 11  набір окремих чисел
// console.log(Math.max(...temps)); // 25
//
// function getExtremeScores(scores) {
//   const extremeScores = {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
//   return extremeScores;
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
//
// const temps = [14, -4, 25, 8, 11];
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
//
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]
//
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);
//
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
//
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
//
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };
// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }
// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
//
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);
