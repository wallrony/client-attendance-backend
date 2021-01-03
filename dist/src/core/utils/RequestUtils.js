"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserId = void 0;
function getUserId(path) {
    const paramList = path.split('/');
    const index = paramList.indexOf('users');
    const id = paramList[index + 1];
    return id ? Number(id) : null;
}
exports.getUserId = getUserId;
//# sourceMappingURL=RequestUtils.js.map