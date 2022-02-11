const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require("body-parser")

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on ${PORT}...`);
});