"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAttendance_1 = require("../../core/models/UserAttendance");
const DateUtils_1 = require("../../core/utils/DateUtils");
const GeneralUtils_1 = require("../../core/utils/GeneralUtils");
const ICommissionsDAO_1 = require("../dao_interfaces/ICommissionsDAO");
const Connection_1 = require("../database/Connection");
class CommissionsDAO extends ICommissionsDAO_1.default {
    async index(doctorId) {
        const connection = Connection_1.createConnection();
        const rows = await connection(this.tableName)
            .select(`${this.tableName}.id`, `${this.tableName}.value`, `${this.tableName}.date`, `${this.tableName}.doctor_id`, `${this.tableName}.client_attendance_id`, 'attendances.title')
            .innerJoin('user_attendances', 'user_attendances.id', '=', `${this.tableName}.client_attendance_id`)
            .innerJoin('attendances', 'attendances.id', '=', 'user_attendances.attendance_id')
            .where(`${this.tableName}.doctor_id`, '=', String(doctorId));
        if (!rows) {
            throw GeneralUtils_1.createError('not-found', `${this.entityName} not found`);
        }
        for (const row of rows) {
            const secondRow = await connection('services')
                .select('services.name', 'services.duration')
                .innerJoin('user_attendance_services', 'user_attendance_services.service_id', '=', 'services.id')
                .innerJoin('user_attendances', 'user_attendances.id', '=', 'user_attendance_services.user_attendance_id')
                .where('user_attendances.id', '=', row['client_attendance_id']);
            row['services'] = secondRow;
        }
        await connection.destroy();
        return rows;
    }
    async add(data) {
        const connection = Connection_1.createConnection();
        const date = DateUtils_1.getActualDate();
        const trx = await connection.transaction();
        const row = await trx(this.tableName)
            .insert(Object.assign(Object.assign({}, data), { date }))
            .returning('*');
        if (!row) {
            throw GeneralUtils_1.createError('internal-error', `error-inserting-${this.entityName}`);
        }
        const secondRow = await trx('user_attendances')
            .update({
            'status': 'realized',
            'doctor_id': data.doctor_id,
        }).where('id', '=', data.client_attendance_id);
        if (!secondRow) {
            throw GeneralUtils_1.createError('internal-error', `error-inserting-${this.entityName}`);
        }
        await trx.commit();
        await trx.destroy();
        await connection.destroy();
        return row[0];
    }
}
exports.default = CommissionsDAO;
//# sourceMappingURL=CommissionsDAO.js.map