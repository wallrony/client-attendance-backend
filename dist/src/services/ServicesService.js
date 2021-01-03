"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Facade_1 = require("../data/Facade");
const Service_1 = require("./Service");
class ServicesService extends Service_1.default {
    async index(attendanceID) {
        const result = {};
        try {
            result.data = await Facade_1.default().indexServices(attendanceID);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async add(data) {
        const result = {};
        try {
            result.data = await Facade_1.default().addService(data);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async update(data) {
        const result = {};
        try {
            result.data = await Facade_1.default().updateService(data);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async delete(id) {
        const result = {};
        try {
            result.data = await Facade_1.default().deleteService(id);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
}
exports.default = ServicesService;
//# sourceMappingURL=ServicesService.js.map