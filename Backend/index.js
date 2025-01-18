const express = require('express');
const app = express();
const port = 3000;
const mongoDB = require("./db");
mongoDB();

app.get('/', (req, res) => {
  res.send("Hello World!!");
})
app.get('/login', (req, res) => {
  res.send("Log In!!");
})

app.listen(port, () => console.log(`App has started at ${port}`))