"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoUtils_1 = require("../../core/utils/CryptoUtils");
const GeneralUtils_1 = require("../../core/utils/GeneralUtils");
const IAuthDAO_1 = require("../dao_interfaces/IAuthDAO");
const Connection_1 = require("../database/Connection");
class AuthDAO extends IAuthDAO_1.default {
    async login(credentials) {
        const connection = Connection_1.createConnection();
        const row = await connection(this.tableName)
            .select('*')
            .where('email', '=', credentials.email)
            .andWhere('password', '=', CryptoUtils_1.encriptPass(credentials.password))
            .first();
        await connection.destroy();
        if (!row) {
            throw GeneralUtils_1.createError('invalid-credentials', 'these credentials are invalid');
        }
        delete row['password'];
        return row;
    }
    async register(data) {
        data.password = CryptoUtils_1.encriptPass(data.password);
        const connection = Connection_1.createConnection();
        const result = await connection(this.tableName)
            .insert(data)
            .returning('id');
        await connection.destroy();
        if (!result) {
            throw GeneralUtils_1.createError('internal-error', `error-insert-${this.entityName}`);
        }
        return true;
    }
}
exports.default = AuthDAO;
//# sourceMappingURL=AuthDAO.js.map