const express = require('express');
const app = express();
const path = require("node:path");

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

// Route handler for rendering the form
app.get('/new', (req, res) => {
  res.render('form');   // Render the 'form.ejs' template
})

// MIDDLEWARE: Before handling the form data, make sure that your Express app can parse POST request bodies. 
app.use(express.urlencoded({extended: true}));



// Route handler for form submission (POST request)
app.post('/new', (req, res) => {
  const {author, message} = req.body;

  messages.push({
    text: message,
    user: author,
    added: new Date()
  });

  
  // Redirect to the home page to display the new message
  res.redirect('/');
})



// Set the view engine (assuming you are using EJS)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
