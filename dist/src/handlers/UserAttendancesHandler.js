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
const UserAttendancesService_1 = require("../services/UserAttendancesService");
const ResponseUtils_1 = require("../core/utils/ResponseUtils");
const common_1 = require("@nestjs/common");
let UserAttendancesHandler = class UserAttendancesHandler extends Handler_1.default {
    constructor() {
        super('user_attendance', new UserAttendancesService_1.default(), [
            'date',
            'services',
        ]);
    }
    async indexAll(request, response) {
        const { doctor_id } = request.params;
        if (!doctor_id.length) {
            return ResponseUtils_1.makeResponse(response, '', `need doctor id param`);
        }
        try {
            Number(doctor_id);
        }
        catch (_a) {
            return ResponseUtils_1.makeResponse(response, '', `wrong doctor id param type`);
        }
        return await this.execService(response, this.service.indexAll, Number(doctor_id));
    }
    async index(request, response) {
        const { user_id } = request.params;
        if (!user_id.length) {
            return ResponseUtils_1.makeResponse(response, '', `need ${this.entityName} id param`);
        }
        try {
            Number(user_id);
        }
        catch (_a) {
            return ResponseUtils_1.makeResponse(response, '', `wrong ${this.entityName}_id param type`);
        }
        return await this.execService(response, this.service.index, Number(user_id));
    }
    async add(request, response) {
        if (!request.body) {
            return ResponseUtils_1.makeResponse(response, 'no-data', 'need body data');
        }
        const emptyFields = this.verifyFields(request.body);
        if (emptyFields.length) {
            return ResponseUtils_1.makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are needed`);
        }
        const { user_id, attendance_id } = request.params;
        if (!attendance_id.length || !user_id.length) {
            return ResponseUtils_1.makeResponse(response, '', `need ${this.entityName} id param`);
        }
        try {
            Number(user_id);
            Number(attendance_id);
        }
        catch (_a) {
            return ResponseUtils_1.makeResponse(response, '', `wrong ${this.entityName}_id param type`);
        }
        const data = this.improver.createT({
            date: request.body['date']
        });
        data.user_id = Number(user_id);
        data.attendance_id = Number(attendance_id);
        return await this.execService(response, this.service.add, data, request.body['services']);
    }
    async update(request, response) {
        if (!request.body) {
            return ResponseUtils_1.makeResponse(response, 'no-data', 'need body data');
        }
        const emptyFields = this.verifyFields(request.body);
        if (emptyFields.length === this.mFieldsLenght) {
            return ResponseUtils_1.makeResponse(response, 'bad-req', `one of ${emptyFields.join(', ')} fields are needed`);
        }
        const { id, user_id, attendance_id } = request.params;
        if (!id.length || !attendance_id.length || !user_id.length) {
            return ResponseUtils_1.makeResponse(response, '', `need ${this.entityName} id param`);
        }
        try {
            Number(id);
            Number(user_id);
            Number(attendance_id);
        }
        catch (_a) {
            return ResponseUtils_1.makeResponse(response, '', `wrong ${this.entityName}_id param type`);
        }
        const data = this.improver.createT({
            user_id: Number(user_id),
            attendance_id: Number(attendance_id),
            date: request.body['date']
        });
        data.id = Number(id);
        return await this.execService(response, this.service.update, data, request.body['services']);
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
    common_1.Get('user-attendances/:doctor_id/all'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserAttendancesHandler.prototype, "indexAll", null);
__decorate([
    common_1.Get('users/:user_id/user-attendances'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserAttendancesHandler.prototype, "index", null);
__decorate([
    common_1.Post('users/:user_id/attendances/:attendance_id/user-attendances'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserAttendancesHandler.prototype, "add", null);
__decorate([
    common_1.Put('users/:user_id/attendances/:attendance_id/user-attendances/:id'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserAttendancesHandler.prototype, "update", null);
__decorate([
    common_1.Delete('user-attendances/:id'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserAttendancesHandler.prototype, "delete", null);
UserAttendancesHandler = __decorate([
    common_1.Controller('api/core/'),
    __metadata("design:paramtypes", [])
], UserAttendancesHandler);
exports.default = UserAttendancesHandler;
//# sourceMappingURL=UserAttendancesHandler.js.map