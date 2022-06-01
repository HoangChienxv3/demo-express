const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Shema = mongoose.Schema;
const AccountShema = new Shema({
    username: String,
    password: String
}, {
    collection: 'account'
});

const AccountModel = mongoose.model('account', AccountShema);

module.exports = AccountModel;