const express = require('express');
const app = express();
const path = require("node:path");
const { ppid } = require('node:process');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

// Route handler for rendering the index page
app.get('/', (req, res) => {
  res.render('index', {title: 'Mini Messageboard', messages: messages});
})

// Set the view engine (assuming you are using EJS)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
