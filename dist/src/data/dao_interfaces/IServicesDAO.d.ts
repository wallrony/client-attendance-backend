import Service from "../../core/models/Service";
import IDAO from "./IDAO";
declare class IServicesDAO extends IDAO {
    constructor();
    index(attendanceID: number): Promise<Service[]>;
    add(service: Service): Promise<Service>;
    update(data: Service): Promise<Service>;
    delete(id: number): Promise<boolean>;
}
export default IServicesDAO;
