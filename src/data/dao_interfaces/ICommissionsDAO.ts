import Commission from "../../core/models/Commission";
import IDAO from "./IDAO";

class ICommissionsDAO extends IDAO {
  constructor() {
    super('commission', 'commissions');
  }

  index(attendanceID: number): Promise<Commission[]> {
    throw('You have to implement this method.');
  }

  add(service: Commission): Promise<Commission> {
    throw('You have to implement this method.');
  }
}

export default ICommissionsDAO;