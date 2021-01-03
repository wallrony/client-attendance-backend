const path = require('path');
require('dotenv-safe').config();
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE,
            port: Number(process.env.DB_PORT),
            ssl: false
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'data', 'database', 'migrations'),
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'data', 'database', 'seeds'),
        },
        pool: {
            min: 3,
            max: 10
        },
        useNullAsDefault: true,
    }
};
//# sourceMappingURL=knexfile.js.map