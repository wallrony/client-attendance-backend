import Attendance from "../../core/models/Attendance";
import IDAO from "./IDAO";

class IAttendancesDAO extends IDAO {
  constructor() {
    super('attendance', 'attendances');
  }

  index(): Promise<Attendance[]> {
    throw('You have to implement this method.');
  }
  
  update(data: Attendance): Promise<Attendance> {
    throw('You have to implement this method.');
  }

  delete(id: number): Promise<boolean> {
    throw('You have to implement this method.');
  }
}

export default IAttendancesDAO;
