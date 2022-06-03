var jwt = require('jsonwebtoken');

var data = { username: 'chien' }
var token = jwt.sign(data, 'chienabc');

console.log(token);