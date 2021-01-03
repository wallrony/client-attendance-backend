"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IDAO_1 = require("./IDAO");
class IDoctorsDAO extends IDAO_1.default {
    constructor() {
        super('doctor', 'doctors');
    }
    show(id) {
        throw ('You have to implement this method.');
    }
    update(data) {
        throw ('You have to implement this method.');
    }
}
exports.default = IDoctorsDAO;
//# sourceMappingURL=IDoctorDAO.js.map