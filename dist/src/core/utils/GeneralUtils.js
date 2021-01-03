"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = void 0;
function createError(name, message) {
    const err = Error();
    err.name = name;
    err.message = message !== null && message !== void 0 ? message : '';
    return err;
}
exports.createError = createError;
//# sourceMappingURL=GeneralUtils.js.map