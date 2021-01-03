"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Facade_1 = require("../data/Facade");
const Service_1 = require("./Service");
class DoctorAuthService extends Service_1.default {
    async login(credentials) {
        const result = {};
        try {
            result.data = await Facade_1.default().doctorLogin(credentials);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async register(data) {
        const result = {};
        try {
            result.data = await Facade_1.default().doctorRegister(data);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
}
exports.default = DoctorAuthService;
//# sourceMappingURL=DoctorAuthService.js.map