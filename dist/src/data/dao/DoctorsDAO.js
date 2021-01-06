"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralUtils_1 = require("../../core/utils/GeneralUtils");
const IDoctorDAO_1 = require("../dao_interfaces/IDoctorDAO");
const Connection_1 = require("../database/Connection");
class DoctorsDAO extends IDoctorDAO_1.default {
    async show(id) {
        const connection = Connection_1.createConnection();
        const row = await connection(this.tableName)
            .join('users', 'users.id', '=', `${this.tableName}.user_id`)
            .where(`${this.tableName}.id`, '=', String(id))
            .select('*', 'doctors.id as doctor_id')
            .first();
        await connection.destroy();
        if (!row || !row['id']) {
            throw GeneralUtils_1.createError('not-found', `${this.entityName} not found`);
        }
        delete row['id'];
        delete row['password'];
        return row;
    }
    async update(data) {
        const connection = Connection_1.createConnection();
        const row = await connection(this.tableName)
            .update(data)
            .where('id', '=', String(data['id']))
            .returning('*');
        await connection.destroy();
        if (!row[0]) {
            throw GeneralUtils_1.createError('not-found', `${this.entityName} not found`);
        }
        return row[0];
    }
}
exports.default = DoctorsDAO;
//# sourceMappingURL=DoctorsDAO.js.map