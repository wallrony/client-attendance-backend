"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendancesModule = void 0;
const common_1 = require("@nestjs/common");
const AttendancesHandler_1 = require("../handlers/AttendancesHandler");
const AttendancesService_1 = require("../services/AttendancesService");
let AttendancesModule = class AttendancesModule {
};
AttendancesModule = __decorate([
    common_1.Module({
        controllers: [AttendancesHandler_1.default],
        providers: [AttendancesService_1.default]
    })
], AttendancesModule);
exports.AttendancesModule = AttendancesModule;
//# sourceMappingURL=attendances.module.js.map