const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const accountShema = new Schema({
    username: String,
    password: String
}, {
    collection: 'account'
});

const AccountModel = mongoose.model('account', accountShema);

module.exports = AccountModel;

// for (let i = 0; i < 20; i++) {
//     AccountModel.create({
//         username: 'test_' + i,
//         password: '123456'
//     })
// }