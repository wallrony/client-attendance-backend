"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IDAO_1 = require("./IDAO");
class IAuthDAO extends IDAO_1.default {
    constructor() {
        super('user', 'users');
    }
    login(credentials) {
        throw ('You have to implement this method.');
    }
    register(data) {
        throw ('You have to implement this method.');
    }
}
exports.default = IAuthDAO;
//# sourceMappingURL=IAuthDAO.js.map