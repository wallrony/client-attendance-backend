"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoUtils_1 = require("../../core/utils/CryptoUtils");
const GeneralUtils_1 = require("../../core/utils/GeneralUtils");
const IDoctorAuthDAO_1 = require("../dao_interfaces/IDoctorAuthDAO");
const Connection_1 = require("../database/Connection");
class DoctorAuthDAO extends IDoctorAuthDAO_1.default {
    async doctorLogin(credentials) {
        const connection = Connection_1.createConnection();
        const row = await connection('users')
            .select('*')
            .join('doctors', 'doctors.user_id', '=', 'users.id')
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
    async doctorRegister(data) {
        data.password = CryptoUtils_1.encriptPass(data.password);
        const connection = Connection_1.createConnection();
        const trx = await connection.transaction();
        const userData = {
            email: data.email,
            password: data.password,
            name: data.name,
            birthday: data.birthday
        };
        const userID = await trx('users')
            .insert(userData)
            .returning('id');
        if (userID) {
            const secondRow = await trx('doctors')
                .insert({
                user_id: Number(userID),
                attendance_id: data.attendance_id,
                crm: data.crm,
            })
                .returning('id');
            if (secondRow) {
                const finalRow = await trx.commit();
                await trx.destroy();
                await connection.destroy();
                if (!finalRow) {
                    throw GeneralUtils_1.createError('internal-error', `error-commiting-transaction-${this.entityName}`);
                }
            }
            else {
                throw GeneralUtils_1.createError('internal-error', `error-inserting-${this.entityName}`);
            }
        }
        else {
            throw GeneralUtils_1.createError('internal-error', 'error-inserting-user');
        }
        return true;
    }
}
exports.default = DoctorAuthDAO;
//# sourceMappingURL=DoctorAuthDAO.js.map