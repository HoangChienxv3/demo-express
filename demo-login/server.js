const express = require('express');
var app = express();
var bodyParser = require('body-parser');
const AccountModel = require('./models/account')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', (req, res, next) => {

    var username = req.body.username;
    var password = req.body.password;

    AccountModel.findOne({
        username: username
    }).then(data => {
        if (data) {
            res.json('user da ton tai');
        } else {
            return AccountModel.create({
                username: username,
                password: password
            });
        }
    }).then(data => {
        res.json('tao tai khoan thanh cong');
    }).catch(err => {
        res.status(500).json('tao tai khoan that bai')
    });
})

app.post('/login', (req, res, next) => {

    var username = req.body.username;
    var password = req.body.password;

    AccountModel.findOne({
        username: username,
        password: password
    }).then(data => {
        if (data) {
            res.json('Dang nhap thanh cong');
        } else {
            res.json('Sai thong tin dang nhap');
        }
    }).catch(err => {
        res.status(500).json('Loi server');
    });
    console.log(req.body);
})

app.get('/', (req, res, next) => {
    res.json('Home');

});

var accountRouter = require('./router/account');
app.use('/api/account/', accountRouter);

app.listen(3000, () => {
    console.log(`server started on port`)
})