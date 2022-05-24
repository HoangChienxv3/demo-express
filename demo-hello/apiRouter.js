const express = require('express')
var router = express.Router()

router.get('/r1', (req, res) => {
    res.json('router 1 ')
})

router.get('/product', (req, res) => {
    res.json('router 1 product')
})

router.get('/card', (req, res) => {
    res.json('router 1 card')
})

router.get('/:id', (req, res) => {
    res.json('router 1 id ' + req.params.id)
})

module.exports = router