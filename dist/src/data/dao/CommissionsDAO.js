"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralUtils_1 = require("../../core/utils/GeneralUtils");
const ICommissionsDAO_1 = require("../dao_interfaces/ICommissionsDAO");
const Connection_1 = require("../database/Connection");
class CommissionsDAO extends ICommissionsDAO_1.default {
    async index(doctorId) {
        const connection = Connection_1.createConnection();
        const rows = await connection(this.tableName)
            .select('*')
            .where('doctor_id', '=', String(doctorId));
        await connection.destroy();
        if (!rows) {
            throw GeneralUtils_1.createError('not-found', `${this.entityName} not found`);
        }
        return rows;
    }
    async add(data) {
        const connection = Connection_1.createConnection();
        const row = await connection(this.tableName)
            .insert(data)
            .returning('*');
        await connection.destroy();
        if (!row) {
            throw GeneralUtils_1.createError('internal-error', `error-inserting-${this.entityName}`);
        }
        return row[0];
    }
}
exports.default = CommissionsDAO;
//# sourceMappingURL=CommissionsDAO.js.map