"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decriptPass = exports.encriptPass = void 0;
const crypto = require('crypto');
require('dotenv-safe').config();
const cryptoData = {
    algorithm: 'aes256',
    secret: String(process.env.SECRET),
    type: 'hex',
    coding: 'utf8'
};
function encriptPass(pass) {
    const cipher = crypto.createCipher(cryptoData.algorithm, cryptoData.secret);
    cipher.update(pass);
    return cipher.final(cryptoData.type);
}
exports.encriptPass = encriptPass;
function decriptPass(pass) {
    const cipher = crypto.createDecipher(cryptoData.algorithm, cryptoData.secret);
    cipher.update(pass, cryptoData.type);
    return cipher.final();
}
exports.decriptPass = decriptPass;
//# sourceMappingURL=CryptoUtils.js.map