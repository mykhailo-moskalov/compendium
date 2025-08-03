// // SYNTAX async/await
//
// // ASYNCHRONOUS FUNCTIONS
//
// async function fetchData() {
//   // ...
// }
// const fetchData = async function () {
//   // ...
// };
// const fetchData = async () => {
//   // ...
// };
// const user = {
//   async getUsername() {
//     // ...
//   },
// };
// class User {
//   async getUsername() {
//     // ...
//   }
// }
//
// const foo = async () => {
//   return 5;
// };
// foo().then((value) => {
//   console.log(value); // 5
// });
//
// const foo = async () => {
//   // Не вказуємо значення для повернення
// };
// foo().then((value) => {
//   console.log(value); // undefined
// });
//
//
// // OPERATOR await
//
// const foo = async () => {
//   console.log("Before await");
//   const promiseValue = await new Promise((resolve) => {
//     setTimeout(() => resolve(5), 2000);
//   });
//   console.log("After await", promiseValue);
// };
// foo(); // after 2 seconds it will be displayed in the console "After await" 5
//
//
// // HTTP-REQUESTS
//
// const fetchUsers = () => {
//   axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//     console.log(response.data);
//   });
// };
//
// const fetchUsers = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   return response.data;
// };
// fetchUsers().then((users) => console.log(users));
//
//
// // CONSTRUCTION try...catch
//
// console.log("Before try...catch");
// try {
//   const result = 10 / 0;
//   console.log(result); // This line will not execute due to an error.
// } catch (error) {
//   console.error(error.message);
// }
// console.log("After try...catch");
//
//
// // ERROR HANDLING
//
// const fetchUsers = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.log("Помилка при отриманні користувачів:", error);
//   }
// };
//
// const fetchUsers = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   return response.data;
// };
// fetchUsers()
//   .then((users) => console.log(users))
//   .catch((error) => console.log("Помилка:", error));
//
// const fetchUsers = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   return response.data;
// };
// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.log("Помилка в doStuff:", error);
//   }
// };
// doStuff();
//
//
//
// // PAGINATION
//
// // NUMBER OF ELEMENTS
//
// const fetchPosts = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts?_limit=5&_page=3"
//   );
//   console.log("Posts: ", response.data);
// };
//
//
// // RECEPTION "LOAD MORE"
//
// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");
// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let perPage = 10;
// fetchPostsBtn.addEventListener("click", async () => {
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;
//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = "Fetch more posts";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: perPage,
//     _page: page,
//   });
//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }
// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.insertAdjacentHTML("beforeend", markup);
// }
//
//
// // END OF COLLECTION CHECK
//
// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");
// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let limit = 40;
// // In our case total number of pages is calculated on frontend
// const totalPages = Math.ceil(100 / limit);
// fetchPostsBtn.addEventListener("click", async () => {
//   // Check the end of the collection to display an alert
//   if (page > totalPages) {
//     return iziToast.error({
//       position: "topRight",
//       message: "We're sorry, there are no more posts to load",
//     });
//   }
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;
//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = "Fetch more posts";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: limit,
//     _page: page,
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }
// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.insertAdjacentHTML("beforeend", markup);
// }
