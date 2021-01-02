import Attendance from "../core/models/Attendance";
import AuthCredentials from "../core/models/AuthCredentials";
import Commission from "../core/models/Commission";
import Doctor from "../core/models/Doctor";
import Service from "../core/models/Service";
import User from "../core/models/User";
import UserAttendance from "../core/models/UserAttendance";
import AttendancesDAO from "./dao/AttendancesDAO";
import AuthDAO from "./dao/AuthDAO";
import CommissionsDAO from "./dao/CommissionsDAO";
import DoctorAuthDAO from "./dao/DoctorAuthDAO";
import DoctorsDAO from "./dao/DoctorsDAO";
import ServicesDAO from "./dao/ServicesDAO";
import UserAttendancesDAO from "./dao/UserAttendancesDAO";
import UsersDAO from "./dao/UsersDAO";
import IAttendancesDAO from "./dao_interfaces/IAttendancesDAO";
import IAuthDAO from "./dao_interfaces/IAuthDAO";
import ICommissionsDAO from "./dao_interfaces/ICommissionsDAO";
import IDoctorAuthDAO from "./dao_interfaces/IDoctorAuthDAO";
import IDoctorsDAO from "./dao_interfaces/IDoctorDAO";
import IServicesDAO from "./dao_interfaces/IServicesDAO";
import IUserAttendanceDAO from "./dao_interfaces/IUserAttendanceDAO";
import IUsersDAO from "./dao_interfaces/IUserDAO";

class Facade {
  private attendancesDAO: IAttendancesDAO;
  private authDAO: IAuthDAO;
  private commissionsDAO: ICommissionsDAO;
  private doctorAuthDAO: IDoctorAuthDAO;
  private doctorDAO: IDoctorsDAO;
  private servicesDAO: IServicesDAO;
  private userAttendancesDAO : IUserAttendanceDAO;
  private userDAO: IUsersDAO;

  constructor() {
    this.attendancesDAO = new AttendancesDAO();
    this.authDAO = new AuthDAO();
    this.commissionsDAO = new CommissionsDAO();
    this.doctorAuthDAO = new DoctorAuthDAO();
    this.doctorDAO = new DoctorsDAO();
    this.servicesDAO = new ServicesDAO();
    this.userAttendancesDAO = new UserAttendancesDAO();
    this.userDAO = new UsersDAO();
  }

  /// AttendancesDAO Methods
  async indexAttendances(): Promise<Attendance[]> {
    return await this.attendancesDAO.index();
  }

  async addAttendance(data: Attendance): Promise<Attendance> {
    return await this.attendancesDAO.add(data);
  }

  async updateAttendance(data: Attendance): Promise<Attendance> {
    return await this.attendancesDAO.update(data);
  }

  async deleteAttendance(id: number): Promise<boolean> {
    return await this.attendancesDAO.delete(id);
  }

  // AuthDAO Methods
  async login(credentials: AuthCredentials): Promise<User> {
    return await this.authDAO.login(credentials);
  }

  async doctorLogin(credentials: AuthCredentials): Promise<Doctor> {
    return await this.doctorAuthDAO.doctorLogin(credentials);
  }

  async register(data: User): Promise<boolean> {
    return await this.authDAO.register(data);
  }

  async doctorRegister(data: Doctor): Promise<boolean> {
    return await this.doctorAuthDAO.doctorRegister(data);
  }

  // CommissionsDAO Methods
  async indexCommissions(doctorId: number): Promise<Commission[]> {
    return await this.commissionsDAO.index(doctorId);
  }

  async addCommission(data: Commission): Promise<Commission> {
    return await this.commissionsDAO.add(data);
  }

  // DoctorDAO Methods
  async showDoctor(id: number): Promise<Doctor> {
    return await this.doctorDAO.show(id);
  }

  async updateDoctor(data: Doctor): Promise<Doctor> {
    return await this.doctorDAO.update(data);
  }

  // ServicesDAO Methods
  async indexServices(attendanceID: number): Promise<Service[]> {
    return await this.servicesDAO.index(attendanceID);
  }

  async addService(data: Service): Promise<Service> {
    return await this.servicesDAO.add(data);
  }

  async updateService(data: Service): Promise<Service> {
    return await this.servicesDAO.update(data);
  }

  async deleteService(id: number): Promise<boolean> {
    return await this.servicesDAO.delete(id);
  }

  // UserAttendancesDAO Methods
  async indexUserAttendances(attendanceID: number): Promise<UserAttendance[]> {
    return await this.userAttendancesDAO.index(attendanceID);
  }

  async addUserAttendance(data: UserAttendance, services: number[]): Promise<UserAttendance> {
    return await this.userAttendancesDAO.add(data, services);
  }

  async updateUserAttendance(data: UserAttendance): Promise<UserAttendance> {
    return await this.userAttendancesDAO.update(data);
  }

  async deleteUserAttendance(id: number): Promise<boolean> {
    return await this.userAttendancesDAO.delete(id);
  }

  // UserDAO Methods
  async showUser(id: number): Promise<User> {
    return await this.userDAO.show(id);
  }

  async updateUser(data: User): Promise<User> {
    return await this.userDAO.update(data);
  }
}

let FacadeInstance = function(): Facade {
  let instance: Facade;

  FacadeInstance = function() {
    return instance;
  };

  instance = new Facade();

  return instance;
}

export default FacadeInstance;
