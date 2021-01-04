"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../core/models/Service");
const GeneralUtils_1 = require("../../core/utils/GeneralUtils");
const IAttendancesDAO_1 = require("../dao_interfaces/IAttendancesDAO");
const Connection_1 = require("../database/Connection");
class AttendancesDAO extends IAttendancesDAO_1.default {
    async index() {
        const connection = Connection_1.createConnection();
        const rows = await connection(this.tableName)
            .select('*');
        for (let i = 0; i < rows.length; i++) {
            const attendance_id = rows[i].id;
            const services = await connection('services')
                .select('id', 'name', 'description', 'duration', 'price')
                .where('attendance_id', '=', attendance_id);
            rows[i]['services'] = services;
        }
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
        if (!row[0]['id']) {
            throw GeneralUtils_1.createError('internal-error', `error-inserting-${this.entityName}`);
        }
        return row[0];
    }
    async update(data) {
        const connection = Connection_1.createConnection();
        const row = await connection(this.tableName)
            .update(data)
            .where('id', '=', String(data.id))
            .returning('*');
        await connection.destroy();
        if (!row[0]) {
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
        if (!row) {
            throw GeneralUtils_1.createError('internal-error', 'error deleting user');
        }
        return true;
    }
}
exports.default = AttendancesDAO;
//# sourceMappingURL=AttendancesDAO.js.map