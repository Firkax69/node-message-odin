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

// Route handler for showing message details
app.get('/message/:id', (req, res) => {
  const messageId = req.params.id;
  const message = messages[messageId];

  if (message) {
    res.render('message', {title: 'Message Details', message: message});
  } else {
    res.status(404).send('Message not found');
  }
})

// MIDDLEWARE: Before handling the form data, make sure that your Express app can parse POST request bodies. 
app.use(express.urlencoded({extended: true}));



// Route handler for form submission (POST request)
app.post('/new', (req, res) => {
  console.log(req.body);  // Debugging to check form data
  
  const messageUser = req.body.user;
  const messageText = req.body.message;

  if (messageUser && messageText) {
      messages.push({ 
          text: messageText, 
          user: messageUser, 
          added: new Date() 
      });
  } else {
      console.log("Form data is missing or incomplete.");
  }

  res.redirect('/');
});



// Set the view engine (assuming you are using EJS)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
