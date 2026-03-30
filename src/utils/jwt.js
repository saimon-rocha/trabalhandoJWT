const jwt = require('jsonwebtoken');
const moment = require('moment-timezone');

function generateToken(userId) {
    const expiresIn = 10 * 60; // 10 minutos em segundos

    const token = jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn }
    );

    // Data/hora da expiração no horário de São Paulo
    const expiresAt = moment()
        .add(expiresIn, 'seconds')
        .tz('America/Sao_Paulo')
        .format('YYYY-MM-DD HH:mm:ss');

    return { token, expiresIn, expiresAt };
}

module.exports = { generateToken };