import Doctor from "../../core/models/Doctor";
import IDAO from "./IDAO";

class IDoctorsDAO extends IDAO {
  constructor() {
    super('doctor', 'doctors');
  }

  show(id: number): Promise<Doctor> {
    throw('You have to implement this method.');
  }

  update(data: Doctor): Promise<Doctor> {
    throw('You have to implement this method.');
  }
}

export default IDoctorsDAO;
