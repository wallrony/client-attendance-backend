"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Facade_1 = require("../data/Facade");
const Service_1 = require("./Service");
class DoctorsService extends Service_1.default {
    async show(id) {
        const result = {};
        try {
            result.data = await Facade_1.default().showDoctor(id);
        }
        catch (e) {
            console.log(e);
            result.err = e;
        }
        return result;
    }
    async update(data) {
        const result = {};
        try {
            result.data = await Facade_1.default().updateDoctor(data);
        }
        catch (e) {
            console.log(e);
            result.err = e;
        }
        return result;
    }
}
exports.default = DoctorsService;
//# sourceMappingURL=DoctorsService.js.map