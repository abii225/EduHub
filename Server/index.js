const express = require("express");
const app = express();

/**
 * apply middlewares
 */

app.use(express.json());

// -----------------------------------------------------------  //
app.get("/", (req, res) => {
  res.send("hey homepage");
});

app.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});
