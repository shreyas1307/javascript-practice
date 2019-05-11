const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos/")
  .then(res => res.json())
  .then(data => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then(res => res.json())
//   .then(data => console.log(data));
