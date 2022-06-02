const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

const AccountModel = require('./models/Account');
const { table } = require('console');
const PAGE_SIZE = 2;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/user', async(req, res, next) => {
    var page = req.query.page;
    let total = await getTotal();
    let tongsoPage = getTotalPage(total);
    if (page) {
        page = parseInt(page);

        if (page < 1)
            page = 1;

        var soLuongBoQua = (page - 1) * PAGE_SIZE;

        let getList = await AccountModel.find({})
            .skip(soLuongBoQua)
            .limit(PAGE_SIZE);
        return res.json({ data: getList, total, tongsoPage });
    }
    let getList = await AccountModel.find({});
    return res.json({ data: getList, total });
})

async function getTotal() {
    let count = await AccountModel.countDocuments({});
    return count;
}

function getTotalPage(total) {
    var tongSoPage = Math.ceil(total / PAGE_SIZE);
    return tongSoPage;
}

app.listen(3000, () => {
    console.log(`on start`);
});