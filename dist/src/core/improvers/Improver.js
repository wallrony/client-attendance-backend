"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Improver {
    constructor(mandatoryFields) {
        this.mandatoryFields = mandatoryFields;
    }
    createT(item) {
        let data = {};
        for (const attr of Object.keys(item)) {
            if (this.mandatoryFields.includes(attr)) {
                data[attr] = item[attr];
            }
        }
        return data;
    }
    createTList(data) {
        const list = [];
        for (const item of data) {
            list.push(this.createT(item));
        }
        return list;
    }
}
exports.default = Improver;
//# sourceMappingURL=Improver.js.map