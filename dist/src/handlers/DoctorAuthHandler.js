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
const common_1 = require("@nestjs/common");
const Handler_1 = require("./Handler");
const DoctorAuthService_1 = require("../services/DoctorAuthService");
const ResponseUtils_1 = require("../core/utils/ResponseUtils");
let DoctorAuthHandler = class DoctorAuthHandler extends Handler_1.default {
    constructor() {
        super('doctor', new DoctorAuthService_1.default(), ['name', 'email', 'password', 'birthday', 'crm', 'attendance_id']);
    }
    async login(request, response) {
        if (!request.body) {
            return ResponseUtils_1.makeResponse(response, 'no-data', 'need body data');
        }
        const { email, password } = request.body;
        if (!email.length) {
            return ResponseUtils_1.makeResponse(response, 'bad-req', 'email field is missing');
        }
        else if (!password.length) {
            return ResponseUtils_1.makeResponse(response, 'bad-req', 'password field is missing');
        }
        const data = { email, password };
        return await this.execService(response, this.service.login, data);
    }
    async register(request, response) {
        if (!request.body) {
            return ResponseUtils_1.makeResponse(response, 'no-data', 'need body data');
        }
        const emptyFields = this.verifyFields(request.body);
        if (emptyFields.length) {
            return ResponseUtils_1.makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are missing`);
        }
        const data = this.improver.createT(Object.assign({}, request.body));
        return await this.execService(response, this.service.register, data);
    }
};
__decorate([
    common_1.Post('login-doctor'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DoctorAuthHandler.prototype, "login", null);
__decorate([
    common_1.Post('register-doctor'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DoctorAuthHandler.prototype, "register", null);
DoctorAuthHandler = __decorate([
    common_1.Controller('api/accounts'),
    __metadata("design:paramtypes", [])
], DoctorAuthHandler);
exports.default = DoctorAuthHandler;
//# sourceMappingURL=DoctorAuthHandler.js.map