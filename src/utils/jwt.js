import jwt from 'jsonwebtoken';
import moment from 'moment-timezone';

export default function generateToken(userId) {
    const expiresIn = 10 * 60; // 10 minutos
    const expiresInMinutes = expiresIn / 60;

    const token = jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn },
        { expiresInMinutes }
    );

    const expiresAt = moment()
        .add(expiresIn, 'seconds')
        .tz('America/Sao_Paulo')
        .format('YYYY-MM-DD HH:mm:ss');

    return { token, expiresIn, expiresInMinutes, expiresAt };
}