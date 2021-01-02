import Service from "../../core/models/Service";
import IDAO from "./IDAO";

class IServicesDAO extends IDAO {
  constructor() {
    super('service', 'services');
  }

  index(attendanceID: number): Promise<Service[]> {
    throw('You have to implement this method.');
  }
  
  add(service: Service): Promise<Service> {
    throw('You have to implement this method.');
  }
  
  update(data: Service): Promise<Service> {
    throw('You have to implement this method.');
  }

  delete(id: number): Promise<boolean> {
    throw('You have to implement this method.');
  }
}

export default IServicesDAO;
