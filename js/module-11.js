// // HTTP-REQUESTS
//
// // FETCH API
//
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // Response handling
//   })
//   .then((data) => {
//     // Data handling
//   })
//   .catch((error) => {
//     // Error handling
//   });
//
//
// // RESPONSE CHECK
//
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Data handling
//     console.log("Отримані дані:", data);
//   })
//   .catch((error) => {
//     // Error handling
//     console.error("Помилка запиту:", error);
//   });
//
//
// // HTTP-METHODS
//
// fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Data handling
//     console.log("Отримані дані:", data);
//   })
//   .catch((error) => {
//     // Error handling
//     console.error("Помилка запиту:", error);
//   });
//
//
// HTTP-HEADERS
//
// fetch("https://jsonplaceholder.typicode.com/users", {
//   headers: { Accept: "application/json" },
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Data handling
//     console.log("Отримані дані:", data);
//   })
//   .catch((error) => {
//     // Error handling
//     console.error("Помилка запиту:", error);
//   });
//
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");
// fetchUsersBtn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((users) => {
//       const markup = users
//         .map(
//           (user) => `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`
//         )
//         .join("");
//       userList.insertAdjacentHTML("beforeend", markup);
//     })
//     .catch((error) => console.error(error));
// });
//
//
//
// // AXIOS LIBRARY
//
// import axios from "axios";
//
// axios({
//   method: "get",
//   url: "https://jsonplaceholder.typicode.com/users",
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));
//
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));
//
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//     console.log(response.request);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.get("/users").then().catch();
// axios.get("/posts").then().catch();
// axios.get("/images").then().catch();
//
// const myApiKey = "secret-api-key-for-every-request";
// axios.defaults.headers.common["header-name"] = myApiKey;
//
// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });
// axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);
//
// axios.get("https://jsonplaceholder.typicode.com/users", {
//   params: {
//     _limit: 7,
//     _sort: "name",
//   },
// });
