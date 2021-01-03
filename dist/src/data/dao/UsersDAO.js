"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoUtils_1 = require("../../core/utils/CryptoUtils");
const GeneralUtils_1 = require("../../core/utils/GeneralUtils");
const IUserDAO_1 = require("../dao_interfaces/IUserDAO");
const Connection_1 = require("../database/Connection");
class UsersDAO extends IUserDAO_1.default {
    async show(id) {
        const connection = Connection_1.createConnection();
        const row = await connection(this.tableName)
            .select('*')
            .where('id', '=', String(id))
            .first();
        await connection.destroy();
        if (!row) {
            throw GeneralUtils_1.createError('not-found', `${this.entityName} not found`);
        }
        return row;
    }
    async update(data) {
        if (data.password) {
            data.password = CryptoUtils_1.encriptPass(data.password);
        }
        const connection = Connection_1.createConnection();
        const row = await connection(this.tableName)
            .update(Object.assign({}, data))
            .where('id', '=', String(data.id))
            .returning('*');
        await connection.destroy();
        if (!row[0]) {
            throw GeneralUtils_1.createError('not-found', `${this.entityName} not found`);
        }
        delete row[0]['password'];
        return row[0];
    }
}
exports.default = UsersDAO;
//# sourceMappingURL=UsersDAO.js.map