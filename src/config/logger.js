const pino = require('pino');
const moment = require('moment-timezone');

const transport = pino.transport({
    targets: [
        {
            target: 'pino-pretty',
            level: 'info',
            options: {
                colorize: true,
                messageFormat: '{msg}',
                ignore: 'pid,hostname',
                translateTime: false,
                singleLine: false,
            },
        },
    ],
});

const logger = pino(
    {
        level: 'info',
        timestamp: () =>
            `,"time":"${moment()
                .tz('America/Sao_Paulo')
                .format('DD/MM/YYYY HH:mm:ss')}"`,
    },
    transport
);

module.exports = logger;