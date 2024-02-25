const express = require("express");
const app = express();

app.get("/show-all", async () => {
  const res = await fetch("http://localhost:5001/show-all");
  const data = await res.json();
});

app.listen(5001, () => {
  console.log("Server is listening at port 5001");
});

// async function changeStateHandler(state) {
//     const res = await fetch("/api/changeState", {
//       method: "POST",
//       body: JSON.stringify({
//         id: 1,
//         state: state,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await res.json();
//   }
