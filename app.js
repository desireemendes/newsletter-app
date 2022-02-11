const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require("body-parser")
const request = require("request")
const path = require('path');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/signup.html'));
});

app.post('/', function (req, res) {
const firstName = req.body.fName
const lastName = req.body.lName
const email = req.body.email
console.log(firstName, lastName, email)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on ${PORT}...`);
});