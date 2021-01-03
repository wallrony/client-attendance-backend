"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
require('dotenv-safe').config();
const jsonwebtoken_1 = require("jsonwebtoken");
function createToken(id) {
    const expireTime = 600;
    const token = jsonwebtoken_1.sign({ id }, String(process.env.SECRET), { expiresIn: expireTime, });
    return token;
}
exports.createToken = createToken;
//# sourceMappingURL=TokenUtils.js.map