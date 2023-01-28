const express = require("express");
const getMessage = require("./utils");

const app = express();

app.get("/", (req, res) => {
  const message = getMessage();
  res.send(message);
});

app.listen(8080, () => console.log("Listening on localhost:8080"));
