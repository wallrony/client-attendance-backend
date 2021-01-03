"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseConfiguration = void 0;
const path = require('path');
require('dotenv-safe').config();
const devConfig = {
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
    useNullAsDefault: true,
};
const prodConfig = devConfig;
function getDatabaseConfiguration() {
    const state = process.env.APPLICATION_STATE;
    if (state === 'production') {
        return prodConfig;
    }
    else {
        return devConfig;
    }
}
exports.getDatabaseConfiguration = getDatabaseConfiguration;
//# sourceMappingURL=DatabaseUtils.js.map