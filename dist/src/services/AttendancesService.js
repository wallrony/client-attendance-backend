"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const Facade_1 = require("../data/Facade");
const Service_1 = require("./Service");
let AttendancesService = class AttendancesService extends Service_1.default {
    async index() {
        const result = {};
        try {
            result.data = await Facade_1.default().indexAttendances();
        }
        catch (e) {
            console.log(e);
            result.err = e;
        }
        return result;
    }
    async add(data) {
        const result = {};
        try {
            result.data = await Facade_1.default().addAttendance(data);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async update(data) {
        const result = {};
        try {
            result.data = await Facade_1.default().updateAttendance(data);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
    async delete(id) {
        const result = {};
        try {
            result.data = await Facade_1.default().deleteAttendance(id);
        }
        catch (e) {
            result.err = e;
        }
        return result;
    }
};
AttendancesService = __decorate([
    common_1.Injectable()
], AttendancesService);
exports.default = AttendancesService;
//# sourceMappingURL=AttendancesService.js.map