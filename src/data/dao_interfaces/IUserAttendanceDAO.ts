import UserAttendance from "../../core/models/UserAttendance";
import IDAO from "./IDAO";

class IUserAttendanceDAO extends IDAO {
  constructor() {
    super('user-attendance', 'user_attendances');
  }

  indexAll(doctor_id: number): Promise<UserAttendance[]> {
    throw('You have to implement this method.');
  }

  index(attendanceID: number): Promise<UserAttendance[]> {
    throw('You have to implement this method.');
  }

  add(service: UserAttendance, services: number[]): Promise<UserAttendance> {
    throw('You have to implement this method.');
  }

  update(data: UserAttendance, services: number[]): Promise<UserAttendance> {
    throw('You have to implement this method.');
  }

  delete(id: number): Promise<boolean> {
    throw('You have to implement this method.');
  }
}

export default IUserAttendanceDAO;
