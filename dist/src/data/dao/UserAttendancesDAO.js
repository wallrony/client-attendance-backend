"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralUtils_1 = require("../../core/utils/GeneralUtils");
const IUserAttendanceDAO_1 = require("../dao_interfaces/IUserAttendanceDAO");
const Connection_1 = require("../database/Connection");
class UserAttendancesDAO extends IUserAttendanceDAO_1.default {
    async index(userID) {
        const connection = Connection_1.createConnection();
        const rows = await connection(this.tableName)
            .where(`${this.tableName}.user_id`, '=', String(userID))
            .select('*');
        if (!rows) {
            throw GeneralUtils_1.createError('not-found', `${this.entityName} not found`);
        }
        for (const row of rows) {
            const secondRow = await connection('user_attendance_services')
                .select('services.name', 'services.id')
                .innerJoin('services', 'services.id', '=', 'user_attendance_services.service_id')
                .where('user_attendance_services.user_attendance_id', '=', String(row['id']));
            row['services'] = secondRow;
        }
        await connection.destroy();
        return rows;
    }
    async add(data, services) {
        const connection = Connection_1.createConnection();
        const trx = await connection.transaction();
        const row = await trx(this.tableName)
            .insert(data)
            .returning('*');
        if (!row) {
            throw GeneralUtils_1.createError('internal-error', `error-inserting-${this.entityName}`);
        }
        const userAttendanceServices = [];
        for (const service_id of services) {
            userAttendanceServices.push({
                service_id,
                user_attendance_id: row[0]['id']
            });
        }
        const secondRow = await trx('user_attendance_services')
            .insert(userAttendanceServices)
            .returning('*');
        if (!secondRow.length) {
            throw GeneralUtils_1.createError('internal-error', `error-inserting-user-attendance-services`);
        }
        const finalRow = await trx.commit();
        await trx.destroy();
        await connection.destroy();
        if (!finalRow) {
            throw GeneralUtils_1.createError('internal-error', `error-commiting-transaction-${this.entityName}`);
        }
        row[0].services = services;
        return row[0];
    }
    async update(data, services) {
        const connection = Connection_1.createConnection();
        const row = await connection(this.tableName)
            .update(data)
            .where('id', '=', String(data['id']))
            .returning('*');
        if (!row) {
            throw GeneralUtils_1.createError('not-found', `${this.entityName} not found`);
        }
        const secondRow = await connection('user_attendance_services')
            .where('user_attendance_services.user_attendance_id', '=', String(data.id))
            .delete();
        const servicesList = [];
        for (const service_id of services) {
            servicesList.push({
                user_attendance_id: data.id,
                service_id
            });
        }
        const thirdRow = await connection('user_attendance_services')
            .insert(servicesList);
        if (!thirdRow) {
            throw GeneralUtils_1.createError('internal-error', `error-inserting-user-attendance-services`);
        }
        await connection.destroy();
        row[0]['services'] = services;
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
exports.default = UserAttendancesDAO;
//# sourceMappingURL=UserAttendancesDAO.js.map