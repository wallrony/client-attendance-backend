"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const User_1 = require("../core/models/User");
const ResponseUtils_1 = require("../core/utils/ResponseUtils");
const TokenUtils_1 = require("../core/utils/TokenUtils");
const Connection_1 = require("../data/database/Connection");
let AuthMiddleware = class AuthMiddleware {
    async use(request, response, next) {
        const authorization = request.headers['authorization'];
        if (!authorization || !authorization.length) {
            return ResponseUtils_1.makeResponse(response, '', 'need authorization token');
        }
        const authorizationSplit = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ');
        if (authorizationSplit.length !== 2) {
            return ResponseUtils_1.makeResponse(response, '', 'wrong authorization header value');
        }
        const token = authorizationSplit[1];
        const result = TokenUtils_1.verifyToken(token);
        if (typeof (result) === 'string') {
            return ResponseUtils_1.makeResponse(response, result, 'login again to get a valid token.');
        }
        const connection = Connection_1.createConnection();
        const user = await connection('users')
            .select('*')
            .where('id', '=', result)
            .first();
        if (!user['id']) {
            return ResponseUtils_1.makeResponse(response, 'unauthorized-user', 'login again to get a valid token.');
        }
        return next();
    }
};
AuthMiddleware = __decorate([
    common_1.Injectable()
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=AuthMiddleware.js.map