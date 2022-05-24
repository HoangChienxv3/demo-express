const express = require('express')
const app = express()
const port = 5000

var router1 = require("./apiRouter")
var router2 = express.Router()
var router3 = require("./middleware")

app.use('/api1/', router1);
app.use('/middleware/', router3);

app.listen(port, () => {
    console.log(`example app listening : ${port}`)
})