"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IDAO_1 = require("./IDAO");
class IUsersDAO extends IDAO_1.default {
    constructor() {
        super('user', 'users');
    }
    show(id) {
        throw ('You have to implement this method.');
    }
    update(data) {
        throw ('You have to implement this method.');
    }
}
exports.default = IUsersDAO;
//# sourceMappingURL=IUserDAO.js.map