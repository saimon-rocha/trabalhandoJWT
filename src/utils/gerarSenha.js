const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

bcrypt.hash('123456', SALT_ROUNDS).then(hash => console.log(hash));