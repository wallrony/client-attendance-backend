"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActualDate = void 0;
function getActualDate() {
    const actualDate = new Date();
    const date = `${actualDate.getFullYear()}-${actualDate.getMonth() + 1}-${actualDate.getDay()}T${actualDate.getHours()}:${actualDate.getMinutes()}:${actualDate.getSeconds()}.000Z`;
    return date;
}
exports.getActualDate = getActualDate;
//# sourceMappingURL=DateUtils.js.map