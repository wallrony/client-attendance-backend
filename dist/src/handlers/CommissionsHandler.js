"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const Handler_1 = require("./Handler");
const CommissionsService_1 = require("../services/CommissionsService");
const ResponseUtils_1 = require("../core/utils/ResponseUtils");
const common_1 = require("@nestjs/common");
let CommissionsHandler = class CommissionsHandler extends Handler_1.default {
    constructor() {
        super('commission', new CommissionsService_1.default(), ['doctor_id', 'client_attendance_id', 'value']);
    }
    async index(request, response) {
        const { doctor_id } = request.params;
        if (!doctor_id.length) {
            return ResponseUtils_1.makeResponse(response, '', `need ${this.entityName} id param`);
        }
        try {
            Number(doctor_id);
        }
        catch (_a) {
            return ResponseUtils_1.makeResponse(response, '', 'wrong attendance_id param type');
        }
        return await this.execService(response, this.service.index, Number(doctor_id));
    }
    async add(request, response) {
        const { doctor_id } = request.params;
        if (!doctor_id.length) {
            return ResponseUtils_1.makeResponse(response, '', `need ${this.entityName} id param`);
        }
        const body = request.body;
        body['doctor_id'] = doctor_id;
        if (!body) {
            return ResponseUtils_1.makeResponse(response, 'no-data', 'need body data');
        }
        const emptyFields = this.verifyFields(body);
        if (emptyFields.length) {
            return ResponseUtils_1.makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are needed`);
        }
        try {
            Number(doctor_id);
            Number(body['client_attendance_id']);
        }
        catch (_a) {
            return ResponseUtils_1.makeResponse(response, '', 'wrong attendance_id param type');
        }
        const data = this.improver.createT(Object.assign({}, body));
        return await this.execService(response, this.service.add, data);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CommissionsHandler.prototype, "index", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CommissionsHandler.prototype, "add", null);
CommissionsHandler = __decorate([
    common_1.Controller('/api/core/doctor/:doctor_id/commissions'),
    __metadata("design:paramtypes", [])
], CommissionsHandler);
exports.default = CommissionsHandler;
//# sourceMappingURL=CommissionsHandler.js.map