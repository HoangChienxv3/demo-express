const express = require('express');
var router = express.Router();
const AccountModel = require('../models/account');


router.get('/', (req, res, next) => {

    AccountModel.find({

    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json("Loi");
    });

});

router.post('/', (req, res, next) => {
    AccountModel.create({
        username: req.body.username,
        password: req.body.password
    }).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.status(500).json('Lôi server');
    })
});

router.put('/:id', (req, res, next) => {
    var id = req.params.id;
    var newPassword = req.body.newPassword;

    AccountModel.findByIdAndUpdate(id, {
        password: newPassword
    }).then(data => {
        res.json('update thanh cong');
    }).catch(err => {
        res.status(500).json('Loi update');
    })
});

router.delete('/:id', (req, res, next) => {
    var id = req.params.id;
    AccountModel.deleteOne({
        _id: id
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json('loi server');
    })
});

module.exports = router;