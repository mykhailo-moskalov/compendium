// // PROPERTIES AND ATTRIBUTES
//
// // ACCESS TO PROPERTIES
//
// const link = document.querySelector(".link");
// console.log(link.href); // "https://goit.global"
// link.href = "https://neo.goit.global";
// console.log(link.href); // "https://neo.goit.global"
//
//
// // PROPERTY textContent
//
// const el = document.querySelector(".text");
// const nested = document.querySelector(".sub-text");
// console.log(el.textContent); // "Username: Mango"
// el.textContent = "Username: Poly";
// console.log(el.textContent); // "Username: Poly"
// console.log(nested.textContent); // "Mango"
//
//
// // PROPERTY classList
//
// const link = document.querySelector(".link");
// console.log(link.classList); // ["link", "is-active", length: 2, value: "link is-active"]
//
// // Method classList.contains(className)
//
// const hasActiveClass = link.classList.contains("is-active"); // true
// const hasActiveClass = link.classList.contains("title"); // false
//
// // Method classList.add(className)
//
// link.classList.add("special");
// console.log(link.classList); // ["link", "is-active", "special", length: 3, value: "link is-active special"]
//
// // Method classList.remove(className)
//
// link.classList.remove("is-active");
// console.log(link.classList); // ["link", "special", length: 2, value: "link special"]
//
// // Method classList.toggle(className)
//
// link.classList.toggle("is-active");
// console.log(link.classList); // ["link", "special", "is-active", length: 3, value: "link special is-active"]
// link.classList.toggle("is-active");
// console.log(link.classList); // ["link", "special", length: 2, value: "link special"]
//
// // Method classList.replace(oldClassName, newClassName)
//
// link.classList.replace("special", "regular");
// console.log(link.classList); // ["link", "regular", "is-active", length: 3, value: "link regular is-active"]
//
//
// // PROPERTY style
//
// const button = document.querySelector(".btn");
// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";
// console.log(button.style); // inline styles object
//
//
// // ACCESS TO ATTRIBUTES
//
// // Method element.hasAttribute(nameAttribute)
//
// const image = document.querySelector(".image");
// console.log(image.hasAttribute("src")); // true
// console.log(image.hasAttribute("href")); // false
//
// // Method element.getAttribute(nameAttribute)
//
// console.log(image.getAttribute("alt")); // "Rocks and waterfall"
//
// // Method element.setAttribute(nameAttribute, value)
//
// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt")); // Amazing nature
//
// // Method element.removeAttribute(nameAttribute)
//
// image.removeAttribute("alt");
// console.log(image.hasAttribute("alt")); // false
//
//
// // CUSTOM ATTRIBUTES
//
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"
// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"
// saveBtn.dataset.action = "update";
// saveBtn.dataset.role = "admin";
// console.log(saveBtn.dataset.action); // "update"
// console.log(saveBtn.dataset.role); // "admin"
//
//
//
// //CREATING AND DELETING ELEMENTS
//
// // CREATING ELEMENTS
//
// document.createElement(tagName);
//
// const heading = document.createElement("h1");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>
// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";
// console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />
//
//
// // ADDING ELEMENTS
//
// const list = document.querySelector("ul");
// elem.append(el1, el2, ...); // adds one or more elements after all children of the element elem
// list.append(image);
// elem.prepend(el1, el2, ...); // adds one or more elements before all children of the element elem
// list.prepend(heading);
//
//
// // DELETING ITEMS
//
// const text = document.querySelector(".text");
// text.remove();
//
//
// // PROPERTY innerHTML
//
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");
// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");
// console.log(markup);
// list.innerHTML = markup;
//
//
// // METHOD insertAdjacentHTML()
//
// element.insertAdjacentHTML(position, string); // position = "beforebegin", "afterbegin", "beforeend", "afterend"
//
// const list = document.querySelector(".list");
// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");
// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
//
//
//
// // EVENTS
//
// // METHOD addEventListener()
//
// element.addEventListener(event, handler, options);
//
// const button = document.querySelector(".my-button");
// button.addEventListener("click", () => {
//   console.log("The button was pressed and now the next image will appear");
// });
// const handleClick = () => {
//   console.log("The button was pressed and now the next image will appear");
// };
// button.addEventListener("click", handleClick);
//
//
// // METHOD removeEventListener()
//
// element.removeEventListener(event, handler, options);
//
// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");
// const handleClick = () => {
//   console.log("click event listener callback");
// };
// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });
// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });
//
//
// // EVENT OBJECT
//
// const button = document.querySelector(".my-button");
// const handleClick = (e) => {
//   // e === ent && e === event
//   console.log(e);
// };
// button.addEventListener("click", handleClick);
//
// const button = document.querySelector(".btn");
// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };
// button.addEventListener("click", handleClick);
//
//
// // KEYBOARD EVENTS
//
// document.addEventListener("keydown", (event) => {
//   console.log("Keydown: ", event);
// });
// document.addEventListener("keyup", (event) => {
//   console.log("Keyup: ", event);
// });
//
//
// // PROPERTIES key && code
//
// document.addEventListener("keydown", (event) => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });
//
// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;
// console.log(clearLogBtn);
// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);
// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;
//   logList.insertAdjacentHTML("afterbegin", markup);
//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }
// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }
// function incrementKeypressCounter() {
//   keypressCounter++;
// }
//
//
//
// // FORM ELEMENT EVENTS
//
// EVENT submit
//
// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// });
//
// const registerForm = document.querySelector(".form");
// registerForm.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }
//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }
//
//
// // EVENT change
//
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");
// select.addEventListener("change", setOutput);
// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;
//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }
//
//
// // EVENT input
//
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");
// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });
//
//
// // EVENT focus && blur
//
// const textInput = document.querySelector("input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');
// setFocusBtn.addEventListener("click", () => textInput.focus());
// removeFocusBtn.addEventListener("click", () => textInput.blur());
// textInput.addEventListener(
//   "focus",
//   () => (textInput.value = "This input has focus")
// );
// textInput.addEventListener("blur", () => (textInput.value = ""));
