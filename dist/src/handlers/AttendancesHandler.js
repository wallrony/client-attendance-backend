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
const AttendancesService_1 = require("../services/AttendancesService");
const ResponseUtils_1 = require("../core/utils/ResponseUtils");
const common_1 = require("@nestjs/common");
let AttendancesHandler = class AttendancesHandler extends Handler_1.default {
    constructor() {
        super('attendance', new AttendancesService_1.default(), ['title']);
    }
    async index(request, response) {
        return await this.execService(response, this.service.index);
    }
    async add(request, response) {
        if (!request.body) {
            return ResponseUtils_1.makeResponse(response, 'no-data', 'need body data');
        }
        const emptyFields = this.verifyFields(request.body);
        if (emptyFields.length) {
            return ResponseUtils_1.makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are needed`);
        }
        const data = this.improver.createT(request.body);
        if (request.body['services']) {
            data.services = request.body['services'];
        }
        return await this.execService(response, this.service.add, data);
    }
    async update(request, response) {
        if (!request.body) {
            return ResponseUtils_1.makeResponse(response, 'no-data', 'need body data');
        }
        const emptyFields = this.verifyFields(request.body);
        if (emptyFields.length === this.mFieldsLenght) {
            return ResponseUtils_1.makeResponse(response, 'bad-req', `one of ${emptyFields.join(', ')} fields are needed`);
        }
        const { id } = request.params;
        if (!id.length) {
            return ResponseUtils_1.makeResponse(response, '', `need ${this.entityName} id param`);
        }
        try {
            Number(id);
        }
        catch (_a) {
            return ResponseUtils_1.makeResponse(response, '', `wrong ${this.entityName}_id param type`);
        }
        const data = this.improver.createT(Object.assign({}, request.body));
        data['id'] = id;
        return await this.execService(response, this.service.update, data);
    }
    async delete(request, response) {
        const { id } = request.params;
        if (!id.length) {
            return ResponseUtils_1.makeResponse(response, '', `need ${this.entityName} id param`);
        }
        try {
            Number(id);
        }
        catch (_a) {
            return ResponseUtils_1.makeResponse(response, '', `wrong ${this.entityName}_id param type`);
        }
        return await this.execService(response, this.service.delete, Number(id));
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AttendancesHandler.prototype, "index", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AttendancesHandler.prototype, "add", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AttendancesHandler.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AttendancesHandler.prototype, "delete", null);
AttendancesHandler = __decorate([
    common_1.Controller('api/core/attendances'),
    __metadata("design:paramtypes", [])
], AttendancesHandler);
exports.default = AttendancesHandler;
//# sourceMappingURL=AttendancesHandler.js.map