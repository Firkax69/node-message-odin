const express = require('express');
const app = express();
const path = require("node:path");


// app.get("/", (req, res) => res.send("Hello, world!"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
