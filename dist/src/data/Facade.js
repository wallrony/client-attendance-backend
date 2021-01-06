"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AttendancesDAO_1 = require("./dao/AttendancesDAO");
const AuthDAO_1 = require("./dao/AuthDAO");
const CommissionsDAO_1 = require("./dao/CommissionsDAO");
const DoctorAuthDAO_1 = require("./dao/DoctorAuthDAO");
const DoctorsDAO_1 = require("./dao/DoctorsDAO");
const ServicesDAO_1 = require("./dao/ServicesDAO");
const UserAttendancesDAO_1 = require("./dao/UserAttendancesDAO");
const UsersDAO_1 = require("./dao/UsersDAO");
class Facade {
    constructor() {
        this.attendancesDAO = new AttendancesDAO_1.default();
        this.authDAO = new AuthDAO_1.default();
        this.commissionsDAO = new CommissionsDAO_1.default();
        this.doctorAuthDAO = new DoctorAuthDAO_1.default();
        this.doctorDAO = new DoctorsDAO_1.default();
        this.servicesDAO = new ServicesDAO_1.default();
        this.userAttendancesDAO = new UserAttendancesDAO_1.default();
        this.userDAO = new UsersDAO_1.default();
    }
    async indexAttendances() {
        return await this.attendancesDAO.index();
    }
    async addAttendance(data) {
        return await this.attendancesDAO.add(data);
    }
    async updateAttendance(data) {
        return await this.attendancesDAO.update(data);
    }
    async deleteAttendance(id) {
        return await this.attendancesDAO.delete(id);
    }
    async login(credentials) {
        return await this.authDAO.login(credentials);
    }
    async doctorLogin(credentials) {
        return await this.doctorAuthDAO.doctorLogin(credentials);
    }
    async register(data) {
        return await this.authDAO.register(data);
    }
    async doctorRegister(data) {
        return await this.doctorAuthDAO.doctorRegister(data);
    }
    async indexCommissions(doctorId) {
        return await this.commissionsDAO.index(doctorId);
    }
    async addCommission(data) {
        return await this.commissionsDAO.add(data);
    }
    async showDoctor(id) {
        return await this.doctorDAO.show(id);
    }
    async updateDoctor(data) {
        return await this.doctorDAO.update(data);
    }
    async indexServices(attendanceID) {
        return await this.servicesDAO.index(attendanceID);
    }
    async addService(data) {
        return await this.servicesDAO.add(data);
    }
    async updateService(data) {
        return await this.servicesDAO.update(data);
    }
    async deleteService(id) {
        return await this.servicesDAO.delete(id);
    }
    async indexAllUserAttendances(doctor_id) {
        return await this.userAttendancesDAO.indexAll(doctor_id);
    }
    async indexUserAttendances(attendanceID) {
        return await this.userAttendancesDAO.index(attendanceID);
    }
    async addUserAttendance(data, services) {
        return await this.userAttendancesDAO.add(data, services);
    }
    async updateUserAttendance(data, services) {
        return await this.userAttendancesDAO.update(data, services);
    }
    async deleteUserAttendance(id) {
        return await this.userAttendancesDAO.delete(id);
    }
    async showUser(id) {
        return await this.userDAO.show(id);
    }
    async updateUser(data) {
        return await this.userDAO.update(data);
    }
}
let FacadeInstance = function () {
    let instance;
    FacadeInstance = function () {
        return instance;
    };
    instance = new Facade();
    return instance;
};
exports.default = FacadeInstance;
//# sourceMappingURL=Facade.js.map