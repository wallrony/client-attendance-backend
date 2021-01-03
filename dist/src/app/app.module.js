"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
const attendances_module_1 = require("../modules/attendances.module");
const auth_module_1 = require("../modules/auth.module");
const commissions_module_1 = require("../modules/commissions.module");
const doctor_auth_module_1 = require("../modules/doctor.auth.module");
const doctors_module_1 = require("../modules/doctors.module");
const services_module_1 = require("../modules/services.module");
const user_attendances_module_1 = require("../modules/user.attendances.module");
const users_module_1 = require("../modules/users.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(AuthMiddleware_1.AuthMiddleware).forRoutes('api/core', 'api/accounts/users', 'api/accounts/doctors');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            attendances_module_1.AttendancesModule,
            auth_module_1.AuthModule,
            commissions_module_1.CommissionsModule,
            doctor_auth_module_1.DoctorAuthModule,
            doctors_module_1.DoctorsModule,
            services_module_1.ServicesModule,
            user_attendances_module_1.UserAttendancesModule,
            users_module_1.UsersModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map