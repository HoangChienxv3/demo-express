const express = require("express");
var router = express.Router();

var checkAdmin = (req, res, next) => {
    if (dangnhap) {
        user.role = 'admin';
        next();
    } else {
        res.json("chua login");
    }
}
var checkDangnhap = (req, res, next) => {
    if (dangnhap) {
        next();
    } else {
        res.json("chua login");
    }
}

router.get('/', (req, res, next) => {

    console.log("1");
    next();
}, (req, res, next) => {

    console.log("2");
    next();

}, (req, res, next) => {

    console.log("3");
    res.json("oke 3")
})

module.exports = router