// // FUNCTION EXECUTION CONTEXT
//
// // KEYWORD this
//
// const user = {
//   username: "Victor",
//   showName() {
//     console.log(this.username); // console.log(user.username);
//   },
// };
// user.showName();
//
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));
//
// function foo() {
//   console.log(this);
// }
// foo(); // window
//
// "use strict";
// function foo() {
//   console.log(this);
// }
// foo(); // undefined
//
//
// // OBJECT METHOD CONTEXT
//
// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   },
// };
// user.showThis(); // {username: "Poly", showThis: ƒ}
//
// "use strict";
// function showThis() {
//   console.log("this in showThis: ", this);
// }
// showThis(); // "this in showThis: undefined"
//
// "use strict";
// function showThis() {
//   console.log("this in showThis: ", this);
// }
// const user = {
//   username: "Poly",
// };
// user.showContext = showThis;
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}
// showThis(); // "this in showThis: undefined"
//
//
// // METHOD call()
//
// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }
// const mango = {
//   username: "Mango",
//   room: 27,
// };
// const poly = {
//   username: "Poly",
//   room: 191,
// };
// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"
//
//
// // METHOD apply()
//
// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }
// const mango = {
//   username: "Mango",
//   room: 27,
// };
// const poly = {
//   username: "Poly",
//   room: 191,
// };
// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"
//
//
// // METHOD bind() AND CONTEXT LOSS
//
// "use strict";
// const customer = {
//   username: "Jacob",
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };
// customer.sayHello(); // "Hello, Jacob!"
// const greet = customer.sayHello;
// greet(); // TypeError: Cannot read properties of undefined (reading 'username')
//
// const greet = customer.sayHello.bind(customer);
// greet(); // "Hello, Jacob!"
//
//
// // METHOD bind() AND CALLBACKS
//
// "use strict";
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   // callback() — this is a call to the getFullName method in the global context
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }
// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')
//
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }
// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"
//
//
// // ARROW FUNCTIONS
//
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };
// showThis(); // this in showThis: window
//
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };
// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;
// user.showContext(); // this in showThis: window
//
// "use strict";
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };
// showThis(); // this in showThis: window
//
// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };
//     foo();
//     console.log("this in showThis: ", this);
//   },
// };
// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}
//
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };
// showThis.call({ username: "Mango" }); // this in showThis: window
// showThis.apply({ username: "Mango" }); // this in showThis: window
// showThis.bind({ username: "Mango" })(); // this in showThis: window
//
//
//
// // PROTOTYPE
//
// // OBJECT PROTOTYPE
//
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4
//
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// console.log(child);
//
//
// // PROTOTYPE VERIFICATION
//
// const customer = {
//   username: "Jacob",
// };
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false
//
//
// // PROPER AND IMPROPER PROPERTIES
//
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango" // PROPER
// console.log(dog.legs); // 4 // IMPROPER
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
//
//
// // ENUMERATION OF OWN PROPERTIES
//
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";
// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name" "legs"
//   }
// }
//
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]
// for (const key of Object.keys(dog)) {
//   console.log(key); // "name"
// }
//
//
// // PROTOTYPE CHAINS
//
// const objC = { c: "objC prop" };
// const objB = Object.create(objC);
// objB.b = "objB prop";
// const objA = Object.create(objB);
// objA.a = "objA prop";
// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }
// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"
// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"
// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"
// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined
//
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
//
// const objB = {
//   b: "objB prop",
// };
// const objA = Object.create(objB);
// objA.a = "objA prop";
// console.log(objA);
//
//
//
// // OOP
//
// // PROCEDURAL PROGRAMMING
//
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;
// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };
// getWage(baseSalary, overtime, rate);
//
//
// // OBJECT-ORIENTED PROGRAMMING (OOP)
//
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// employee.getWage();
//
//
//
// // CLASSES
//
// // CLASS ANNOUNCEMENT
//
// class User {
//   // class body
// }
// const mango = new User();
// console.log(mango); // {}
// const poly = new User();
// console.log(poly); // {}
//
//
// // CLASS CONSTRUCTOR
//
// class User {
//   constructor() {
//     console.log("constructor call");
//   }
// }
// const mango = new User(); // "constructor call"
// console.log(mango); // {}
//
// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }
// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}
//
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }
// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
//
// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const nissan = new Car("Nissan", "Murano", 31700);
// const audi = new Car("Audi", "Q3", 36000);
// const bmw = new Car("BMW", "X5", 58900);
// console.log(nissan);
// console.log(audi);
// console.log(bmw);
//
//
// // PARAMETERS OBJECT
//
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }
//
// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// const bmw = new Car({ brand: "BMW", model: "X5", price: 58900 });
// console.log(nissan);
// console.log(audi);
// console.log(bmw);
//
//
// // CLASS METHODS
//
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
//   getEmail() {
//     return this.email;
//   }
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("new@mail.com");
// console.log(mango.getEmail()); // "new@mail.com"
//
// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(nissan.getPrice());
// nissan.changePrice(40000);
// console.log(nissan.getPrice());
//
//
// // PROTOTYPE INSTANCE
//
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
//   getEmail() {
//     return this.email;
//   }
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.getEmail()); // "mango@mail.com"
// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}
//
//
// // PRIVATE PROPERTIES
//
// class User {
//   // Optional declaration of public properties
//   name;
//   // Mandatory declaration of private properties
//   #email;
//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // An error will occur, this is a private property
//
// class User {
//   name;
//   #email;
//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"
//
// class Car {
//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(nissan.getBrand());
// nissan.changeBrand("Ferrari");
// console.log(nissan.getBrand());
//
//
// // PRIVATE METHODS
//
// class User {
//   name;
//   #email;
//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
//   // Public method for receiving email
//   getEmail() {
//     return this.#email;
//   }
//   // Public method for changing email
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log("Invalid email format");
//     }
//   }
//   // Private method for email validation
//   #validateEmail(email) {
//     return email.includes("@");
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// mango.changeEmail("newmail.com"); // "Invalid email format"
// mango.changeEmail("new@mail.com");
// console.log(mango.getEmail()); // "new@mail.com"
// // Directly calling a private method from outside will result in an error
// // mango.#validateEmail("test"); // Помилка
//
//
// // GETTERS AND SETTERS
//
// class User {
//   #email;
//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
//   // Getter email
//   get email() {
//     return this.#email;
//   }
//   // Setter email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com
//
// class Car {
//   #brand;
//   #model;
//   #price;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }
//
//
// // STATIC PROPERTIES
//
// class MyClass {
//   static myProp = "value";
// }
// console.log(MyClass.myProp); // "value"
// const inst = new MyClass();
// console.log(inst.myProp); // undefined
//
// class User {
//   static roles = {
//     admin: "admin",
//     editor: "editor",
//     basic: "basic",
//   };
//   #email;
//   #role;
//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }
//   get role() {
//     return this.#role;
//   }
//   set role(newRole) {
//     this.#role = newRole;
//   }
// }
// const mango = new User({
//   email: "mango@mail.com",
//   role: User.roles.admin,
// });
// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"
//
// class Car {
//   static maxPrice = 50000;
//   #price;
//   constructor(params) {
//     this.#price = params.price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice > Car.maxPrice) {
//       return;
//     }
//     this.#price = newPrice;
//   }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000
//
//
// // STATIC METHODS
//
// class MyClass {
//   static myMethod() {
//     console.log("A static method");
//   }
// }
// MyClass.myMethod(); // "A static method"
//
// class User {
//   static #takenEmails = [];
//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }
//   #email;
//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }
// const mango = new User({ email: "mango@mail.com" });
// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true
//
// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//   constructor(params) {
//     this.price = params.price;
//   }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
//
//
// // CLASS INHERITANCE
//
// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   // ContentEditor class body
// }
// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"
//
// class User {
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = { BASIC: "basic", SUPERUSER: "superuser" };
// }
//
//
// // CHILD CLASS CONSTRUCTOR
//
// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email);
//     this.posts = params.posts;
//   }
// }
// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"
//
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"
//
//
// // CHILD CLASS METHODS
//
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }
//   addPost(post) {
//     this.posts.push(post);
//   }
// }
// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }
// editor.addPost("post-1");
// editor.addPost("post-2");
// console.log(editor.posts); // ['post-1', 'post-2']
//
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   blacklistedEmails = [];
//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true;
//     }
//     return false;
//   }
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"
// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
