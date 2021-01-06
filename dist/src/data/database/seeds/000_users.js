"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const CryptoUtils_1 = require("../../../core/utils/CryptoUtils");
async function seed(knex) {
    const users = [];
    users.push({
        name: 'Admin',
        birthday: '2000-01-01',
        email: 'admin@admin.com',
        password: CryptoUtils_1.encriptPass('123456'),
        is_admin: true,
    });
    users.push({
        name: 'User',
        birthday: '2000-01-01',
        email: 'user@user.com',
        password: CryptoUtils_1.encriptPass('123456'),
    });
    const result = await knex('users').insert(users);
    return result;
}
exports.seed = seed;
//# sourceMappingURL=000_users.js.map