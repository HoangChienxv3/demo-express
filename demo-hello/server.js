const express = require('express')
const app = express()
const port = 5000

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


var router1 = require("./apiRouter")
var router2 = express.Router()
var router3 = require("./middleware")

app.use('/api1/', router1);
app.use('/middleware/', router3);

app.listen(port, () => {
    console.log(`example app listening : ${port}`)
})