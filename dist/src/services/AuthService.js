"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthorizedUser_1 = require("../core/models/AuthorizedUser");
const TokenUtils_1 = require("../core/utils/TokenUtils");
const Facade_1 = require("../data/Facade");
const Service_1 = require("./Service");
class AuthService extends Service_1.default {
    async login(credentials) {
        const result = {};
        try {
            result.data = {};
            result.data.user = await Facade_1.default().login(credentials);
            result.data.auth_token = TokenUtils_1.createToken(result.data.user.id);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async register(data) {
        const result = {};
        try {
            result.data = await Facade_1.default().register(data);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
}
exports.default = AuthService;
//# sourceMappingURL=AuthService.js.map