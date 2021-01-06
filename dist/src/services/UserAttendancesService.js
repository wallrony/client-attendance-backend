"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Facade_1 = require("../data/Facade");
const Service_1 = require("./Service");
class UserAttendancesService extends Service_1.default {
    async indexAll(doctor_id) {
        const result = {};
        try {
            result.data = await Facade_1.default().indexAllUserAttendances(doctor_id);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async index(userID) {
        const result = {};
        try {
            result.data = await Facade_1.default().indexUserAttendances(userID);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async add(data, services) {
        const result = {};
        try {
            result.data = await Facade_1.default().addUserAttendance(data, services);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async update(data, services) {
        const result = {};
        try {
            result.data = await Facade_1.default().updateUserAttendance(data, services);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async delete(id) {
        const result = {};
        try {
            result.data = await Facade_1.default().deleteUserAttendance(id);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
}
exports.default = UserAttendancesService;
//# sourceMappingURL=UserAttendancesService.js.map