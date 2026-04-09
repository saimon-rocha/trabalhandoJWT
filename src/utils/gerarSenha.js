import bcrypt from 'bcrypt';
const SALT_ROUNDS = 10;

bcrypt.hash('password123', SALT_ROUNDS).then(hash => console.log(hash));
