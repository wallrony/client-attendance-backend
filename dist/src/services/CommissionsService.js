"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Facade_1 = require("../data/Facade");
const Service_1 = require("./Service");
class CommissionsService extends Service_1.default {
    async index(doctorId) {
        const result = {};
        try {
            result.data = await Facade_1.default().indexCommissions(doctorId);
        }
        catch (e) {
            console.log(e);
            result.err = e;
        }
        return result;
    }
    async add(data) {
        const result = {};
        try {
            result.data = await Facade_1.default().addCommission(data);
        }
        catch (e) {
            console.log(e);
            result.err = e;
        }
        return result;
    }
}
exports.default = CommissionsService;
//# sourceMappingURL=CommissionsService.js.map