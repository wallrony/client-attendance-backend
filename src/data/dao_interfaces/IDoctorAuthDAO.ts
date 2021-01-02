import Doctor from "../../core/models/Doctor";
import IDAO from "./IDAO";

abstract class IDoctorAuthDAO extends IDAO {
  constructor() {
    super('doctor', 'doctors');
  }

  doctorLogin(credentials): Promise<Doctor> {
    throw('You have to implement this method.');
  }

  doctorRegister(data: Doctor): Promise<boolean> {
    throw('You have to implement this method.');
  }
}

export default IDoctorAuthDAO;
