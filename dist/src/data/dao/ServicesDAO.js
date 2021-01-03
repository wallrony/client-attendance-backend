"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralUtils_1 = require("../../core/utils/GeneralUtils");
const IServicesDAO_1 = require("../dao_interfaces/IServicesDAO");
const Connection_1 = require("../database/Connection");
class ServicesDAO extends IServicesDAO_1.default {
    async index(attendanceID) {
        const connection = Connection_1.createConnection();
        const rows = await connection(this.tableName)
            .select('*')
            .where('attendance_id', '=', String(attendanceID));
        await connection.destroy();
        if (!rows.length) {
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
    async update(data) {
        const connection = Connection_1.createConnection();
        const row = await connection(this.tableName)
            .update(data)
            .where('id', '=', String(data['id']))
            .returning('*');
        await connection.destroy();
        if (!row || !row[0]) {
            throw GeneralUtils_1.createError('not-found', `${this.entityName} not found`);
        }
        return row[0];
    }
    async delete(id) {
        const connection = Connection_1.createConnection();
        const row = await connection(this.tableName)
            .delete()
            .where('id', '=', String(id));
        await connection.destroy();
        if (row === 0) {
            throw GeneralUtils_1.createError('not-found', `${this.entityName} not found`);
        }
        return true;
    }
}
exports.default = ServicesDAO;
//# sourceMappingURL=ServicesDAO.js.map