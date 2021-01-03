"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Improver_1 = require("../core/improvers/Improver");
const ResponseUtils_1 = require("../core/utils/ResponseUtils");
class Handler {
    constructor(entityName, service, mandatoryFields) {
        this.entityName = entityName;
        this.service = service;
        this.mandatoryFields = mandatoryFields;
        this.mFieldsLenght = mandatoryFields.length;
        this.improver = new Improver_1.default(mandatoryFields);
    }
    async execService(response, func, ...args) {
        const result = await func(...args);
        if (result.err) {
            return ResponseUtils_1.makeResponse(response, result.err.name, result.err.message);
        }
        let data;
        if (typeof (result.data) !== 'boolean') {
            data = result.data;
        }
        return ResponseUtils_1.makeResponse(response, 'success', data);
    }
    verifyFields(body) {
        const emptyFields = [];
        for (const field of this.mandatoryFields) {
            if (!body[field] ||
                (typeof (body[field]) === 'string' && !body[field].length)) {
                emptyFields.push(field);
            }
        }
        return emptyFields;
    }
}
exports.default = Handler;
//# sourceMappingURL=Handler.js.map