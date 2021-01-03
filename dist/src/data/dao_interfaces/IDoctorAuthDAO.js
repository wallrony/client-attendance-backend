"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IDAO_1 = require("./IDAO");
class IDoctorAuthDAO extends IDAO_1.default {
    constructor() {
        super('doctor', 'doctors');
    }
    doctorLogin(credentials) {
        throw ('You have to implement this method.');
    }
    doctorRegister(data) {
        throw ('You have to implement this method.');
    }
}
exports.default = IDoctorAuthDAO;
//# sourceMappingURL=IDoctorAuthDAO.js.map