"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
require('dotenv-safe').config();
const jsonwebtoken_1 = require("jsonwebtoken");
function createToken(id) {
    const expireTime = 600;
    const token = jsonwebtoken_1.sign({ id }, String(process.env.SECRET), { expiresIn: expireTime, algorithm: "HS256" });
    return token;
}
exports.createToken = createToken;
function verifyToken(token) {
    let result = 0;
    try {
        const decoded = jsonwebtoken_1.verify(token, String(process.env.SECRET), { algorithms: ["HS256"] });
        result = decoded['id'];
    }
    catch (e) {
        result = 'unauthorized-user';
    }
    return result;
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=TokenUtils.js.map